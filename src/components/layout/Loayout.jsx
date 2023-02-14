import React from 'react'
import Header from '../Header/Header'
import Footer  from '../Footer/Footer'
import Routers from '../../routers/Routers'

import AdminNav from "../../admin/AdminNav"
import { useLocation } from 'react-router-dom'


const Loayout = () => {

  const location =useLocation()
  return(
    <>

    {
      location.pathname.startsWith('/dashboard') ? <AdminNav/> :  <Header/>
    }


    <div>
       <Routers/>
    </div>
    <Footer/>
    </>
  );
}

export default Loayout
