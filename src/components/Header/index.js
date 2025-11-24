import {useContext} from 'react'
import avatarPadrao from '../../assets/avatar.png'
import {Link} from 'react-router-dom'
import { AuthContext } from '../../contexts/auth'
import { FiHome, FiSettings, FiUser} from 'react-icons/fi'
import './header.css'


export default function Header(){
    
    const {user} = useContext(AuthContext)
    
    return(

        
        <div className='sidebar'>
            <div>
                <img src={user.imagemUrl === null ? avatarPadrao : user.imagemUrl} alt='Foto da header' sizes='{90}'/>
            </div>

        <Link to='/dashboard'>
            <FiHome size={24}/>
            Chamados
        </Link> 

        <Link to='/costumers'>
            <FiUser size={24}/>
            Clientes
        </Link> 

        <Link to='/profile'>
            <FiSettings size={24}/>
            Perfil
        </Link>    
            
        </div>
    )
}