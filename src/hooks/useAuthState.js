import React ,{useState,useEffect}from 'react'
import { onAuthStateChanged,getAuth } from 'firebase/auth'
const useAuthState = () => {
    const [loogedIn,setlogedin]=useState(false)
    const [checkState,setCheckState]=useState(true)
    useEffect(()=>{
        const auth=getAuth();
        onAuthStateChanged(auth,(user)=>{
            if(user)
            {
                setlogedin(true)
            }
            setCheckState(false);
        })
    })
  return { loogedIn,checkState}
    
  
}

export default useAuthState