import logo from '../../assets/logo.png'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'



import { AuthContext} from '../../contexts/auth'

import './signup.css'

export default function SignUp(){

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')


    const {signUp, loading} = useContext(AuthContext);

    async function handleSubmit(event){
       event.preventDefault() //prevenir que a tela atualize

        if (name !== '' && password !== '' && email !== ''){
           await signUp(email,password,name)
        }
    }
    
        return(
            <div className='container-center'>
                <div className='area-login'>
                    <div className='img-login'>
                     <img src={logo}/>
                     
    
                    </div>
                  
                    <form onSubmit={handleSubmit}>

                        <h3>Cadastrar</h3>
                        <input 
                        type='text'
                        placeholder='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
       

                     
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
                        {loading ? 'Carregando...' : 'Cadastrar'}
                       </button>
                      
                       
                    </form>
    
                    <Link to='/' className='link-registrar'>Já possui conta? Acesse</Link>
                    
                </div>
               
            </div>
        )
    }