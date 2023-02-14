
import React from 'react'
import useAuth from '../costum-hooks/useAuth'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'


const Protectedroute = () => {

    const {currentUser}= useAuth()


    return currentUser ?  <Outlet/> :  <Navigate to="/login"/>
}

export default Protectedroute;
