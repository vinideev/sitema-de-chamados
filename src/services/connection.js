import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDFS-gIisNkpoazFYn5a9zM7oVBhC7IrU0",
  authDomain: "chamados-niv.firebaseapp.com",
  projectId: "chamados-niv",
  storageBucket: "chamados-niv.firebasestorage.app",
  messagingSenderId: "681664246771",
  appId: "1:681664246771:web:ade5e279f09f6f18b29886",
  measurementId: "G-8PHCJJNH9G"
};
  
  const firebaseApp = initializeApp(firebaseConfig);

  const auth = getAuth(firebaseApp)
  const db = getFirestore(firebaseApp)

  export {auth,db}



  