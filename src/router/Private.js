import { AuthContext } from "../contexts/auth";
import { useContext } from "react";
import {Navigate} from 'react-router-dom'




export default function Private({children}){

    const {signed, loadingPrivate} = useContext(AuthContext); //Maneira de puxar o context de outra 

    if(loadingPrivate){
        return(
            <div></div>
        )
    }


    if(!signed){
        return <Navigate to={'/'}/>
    }

    return children
 
}