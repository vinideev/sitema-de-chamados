import {useState, useContext} from 'react'
import {Link} from 'react-router-dom'

import logo from '../../assets/logo.png'
import './signin.css'
import {AuthContext} from '../../contexts/auth'


export default function SignIn(){

const [email,setEmail] = useState('')
const [password, setPassword] = useState('')


const {signIn ,loading} = useContext(AuthContext)

    async function handleSignIn(event){
        event.preventDefault(); //Previnir de atualizar a página

        if (email !== '' && password !== ''){
          await signIn(email,password);
            
        }
    }


    return(
        <div className='container-center'>
            <div className='area-login'>
            <div className='img-login'>

            <img src={logo}/>
            </div>


                

                <form onSubmit={handleSignIn}>
                    <h3>Entrar</h3>
                    <input 
                    type='text'
                    placeholder='email@email.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />

                 
                    <input
                    type='password'
                    placeholder='*********'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    
                    
                    <button type='submit'>
                       {loading? "Carregando..." : "Acessar"}
                       </button>
                  
                   
                </form>

                <Link to='/register' className='link-registrar'>Registrar</Link>
                
            </div>
           
        </div>
    )
}