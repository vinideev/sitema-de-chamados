import {useState, createContext, useEffect, use} from 'react'
import {auth, db} from '../services/connection'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { doc, getDoc, setDoc} from 'firebase/firestore'
import { useNavigate} from 'react-router-dom' //Usado para navegar entre as páginas


import { toast} from 'react-toastify'

export const AuthContext = createContext({});

function AuthProvider({children}){

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(null);
    const [loadingPrivate, setLoadPrivate] = useState(true) //Sempre vai começar true carregando até buscar as informações do usuário
    

    const navigate = useNavigate();


    useEffect(() => {
        async function loadUser(){
            const storageUser = localStorage.getItem("@usuarios")

            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoadPrivate(false);
            }

            setLoadPrivate(false);

        }

        loadUser();
    }, [])


    async function signIn(email,password){
        setLoading(true)

        await signInWithEmailAndPassword (auth, email,password) 
        .then( async (value) => {
            let uid = value.user.uid;

            const docRef = doc(db, "users", uid) //Para acessar os documentos
            const docSnap = await getDoc(docRef) //Usando o await por conta de acessar o banco de dados e demorar um pouco. Criando uma variavel para resgatar todos as informações do usuario

            
            let data = {
                uid: uid,
                name: docSnap.data().name, //Usando o docSnap por conta de ser de um banco de dados
                email: value.user.email,
                imagemUrl: docSnap.data().imagemUrl
            }


            setUser(data)
            storageUsers(data)
            setLoading(false)
            toast.success("Que bom que você logou!")
            navigate("/dashboard")
            
            
        })
 
    }


    //cadastrar usuario
    async function signUp(email,password,name){
    setLoading(true)

    await createUserWithEmailAndPassword(auth,email,password)
       .then( async (value) => {
            let uid = value.user.uid  //Criando uma variavel para receber os valores
            
            //Colocando as informações e criando um banco de dados
            await setDoc ( doc (db, "users", uid) , {
                name: name,
                imagemUrl:null
              })
                .then(() => {
                   
                    let data = {
                        uid: uid,
                        name: name,
                        email: value.user.email,
                        avatarUrl: null
                    }


                    setLoading(false)
                    storageUsers(data)
                    setUser(data)
                    navigate("/dashboard")
                    toast.success("Seja Bem vindo!")
            })  

       })
       .catch((error) => {
            alert(error)
            setLoading(false)
       })
    }

    function storageUsers(data){
        localStorage.setItem("@usuarios", JSON.stringify(data))
    }


    async function logout(){
        await signOut(auth);
        localStorage.removeItem("@usuarios")
        setUser(null);

    }


 
    return(
        <AuthContext.Provider
        value={{
            signed: !!user, //false
            user,
            signIn,
            signUp,
            logout,
            loading,
            loadingPrivate,
            storageUsers
        }}
        >
           {children}
        </AuthContext.Provider>
    )


}

export default AuthProvider;