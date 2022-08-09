import { Navigate,Outlet} from 'react-router-dom'



import React from 'react'
import useAuthState from '../../hooks/useAuthState'
import Spinner from '../Spinner'

const Privatrout = () => {
    const {loogedIn,checkState}=useAuthState()
    if(checkState)
    {
        return <Spinner/>
    }
  return loogedIn ? <Outlet/>:<Navigate to="/signin" />
}

export default Privatrout