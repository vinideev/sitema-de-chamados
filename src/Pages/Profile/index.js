import {useState, useContext} from 'react'
import Header from "../../components/Header";
import Title from "../../components/Title";
import {FiSettings, FiUpload} from 'react-icons/fi'

import avatar from '../../assets/avatar.png'
import {AuthContext} from '../../contexts/auth'

import './profile.css'


export default function Profile(){

    const {user, storageUsers, logout } = useContext(AuthContext)
    const [avatarUrl, setAvatarUrl] = useState(user && user.imagemUrl)
    const [imageProfile, setImageProfile] = useState(null)

    const [name, setName] = useState(user && user.name)
    const [email, setEmail] = useState(user && user.email)


    function imgUpdate(e){
        if (e.target.files[0]){
            const image = e.target.files[0];
       

            if(image.type === 'image/jpeg' || image.type == 'image/png'){
                setImageProfile(image)
                setAvatarUrl(URL.createObjectURL(image))
            } else{
                alert("Envie um JPEG ou PNG")
                setImageProfile(null)
                return
            }
        }


    }

    return(

        <div>
            <Header/>
            
        <div className="content">
            <Title name={"Meu perfil"}>
                <FiSettings/>
            </Title>

         <div className="container">
            
            <form className='forme=profile'>


                <label className='label-avatar'>
                    <span>
                        <FiUpload size={25} color='white'/>
                    </span>

                    <input type='file' accept='image/*' onChange={imgUpdate} /> <br/>
                    {avatarUrl === null ? (
                        <img src={avatar} alt='Foto de perfil' height={250} width={250}  />
                    ) : (
                        <img src={avatarUrl} alt='Foto de perfil' height={250} width={250}  />
                        )
                    
                    }

                 </label>

                 <label>Nome</label>       
                 <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>

                 <label>Email</label>
                 <input type='text' value={email} disabled={true}/>   


                 <button type='submit'> Salvar</button>
            </form>
            
        </div>   

        <div>
            <button className='logout-btn' onClick={() => logout()}>Sair</button>
        </div>
             
        </div>
          
        </div>
    )
}