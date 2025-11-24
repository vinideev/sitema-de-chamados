import {BrowserRouter} from 'react-router-dom'
import './App.css';
import RouterApp from './router'
import AuthProvider from './contexts/auth';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
    
      <AuthProvider>
        <ToastContainer autoClose={3000}/>
        <RouterApp/>
      </AuthProvider>
     
    </BrowserRouter>
  );
}

export default App;
