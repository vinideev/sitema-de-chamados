import {useState, useContext} from 'react'
import Header from "../../components/Header";
import Title from "../../components/Title";
import {FiSettings, FiUpload} from 'react-icons/fi'

import avatar from '../../assets/avatar.png'
import {AuthContext} from '../../contexts/auth'

import './profile.css'


export default function Profile(){

    const {user} = useContext(AuthContext)
    const [avatarUrl, setAvatarUel] = useState(user && user.imagemUrl)

    return(

        <div>
            <Header/>
            
        <div className="content">
            <Title name={"Meu perfil"}>
                <FiSettings/>
            </Title>

         <div className="container">
            
            <form className='forme=profile'>


                <label className='form-profile'>
                    <span>
                        <FiUpload size={25} color='white'/>
                    </span>

                    <input type='file' accept='image/*'/> <br/>
                    {avatarUrl === null ? (
                        <img src={avatar} alt='Foto de perfil' height={250} width={250}  />
                    ) : (
                        <img src={avatarUrl} alt='Foto de perfil' height={250} width={250}  />
                        )
                    
                    }

                 </label>

                 <label>Nome</label>       
                 <input type='text' placeholder='Seu nome'/>

                 <label>Email</label>
                 <input type='text' placeholder='seuemail@email.com' disabled={true}/>   


                 <buttom type="submit" placeholder="Salvar" />
            </form>
            
        </div>   
             
        </div>
          
        </div>
    )
}