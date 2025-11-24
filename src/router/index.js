import { Route, Routes}from 'react-router-dom'

import SignIn from '../Pages/SignIn'
import SignUp from   '../Pages/SignUp'
import Dashboard from '../Pages/Dashboard'
import Profile from '../Pages/Profile'

import Private from './Private'

function RouterApp(){
    return(
    <Routes>
            
        <Route path='/' element={<SignIn/>}/>
        <Route path='/register' element={ <SignUp/>}/>
        <Route path='dashboard' element={<Private><Dashboard/></Private>}/>
         <Route path='/profile' element={<Private><Profile/></Private>}/>
    </Routes>
    )
}

export default RouterApp;