import './dash.css'
import { useContext } from 'react'
import {AuthContext} from '../../contexts/auth'
import Header from '../../components/Header';


export default function Dashboard(){

    const { logout } = useContext(AuthContext);

    async function handleLogout(){
        await logout();
   }

    return(
           
        <div className="conteiner-dash">
        <Header/>
    
        <div className='conteudo-dash'> 
        <h1>Funcionou!</h1>
        <button onClick={handleLogout}>Sair</button>
        </div>
        
            
        </div>
    )
}