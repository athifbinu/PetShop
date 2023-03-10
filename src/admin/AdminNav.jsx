import React,{useState} from 'react'
import { Container,Row } from 'reactstrap'

import useAuth  from '../costum-hooks/useAuth'
import "../admin-style/admin.nav.css"

import { NavLink } from 'react-router-dom'

import { Link } from 'react-router-dom'

const admin__nav =[
  {
    display:"Dashboard",
    path:'/dashboard'
  },
  {
    display:"Add-Product",
    path:'/dashboard/add-products'
  },
  {
    display:"All-Products",
    path:'/dashboard/all-products'
  },
  {
    display:"Orders",
    path:'/dashboard/orders'
  },
  {
    display:"Users",
    path:'/dashboard/users'
  },

]


const AdminNav = () => {

  const {currentUser} =useAuth()


   

   const [Open,SetOpen]=useState(false)

  return (
    <>



    <header className='admin_header'>
         <div className="admin__nav-top">
              <Container>
                   <div className='admin__nav-wrapper-top'>
                      <Link to="/home" className="logo">
                          <h2>Mtm Petshop</h2>
                      </Link>

                       <div className="search__box ">
                             <input className='wl' type="text" placeholder='Search....' />
                              <span>
                                <i className='ri-search-line ml '></i>
                              </span>
                       </div>

                       {/* user img */}
                       <div className="admin__nav-top-right">
                         <span><i className='ri-notification-3-line'></i></span>
                         <span><i className='ri-settings-2-line'></i></span>
                         <img onClick={()=>{SetOpen(!Open)}} src={currentUser && currentUser.photoURL} alt="" />
                       </div>
                   </div>


                   <div className={`drop-down ad-dr ${Open? 'active':'inaactive'}`}>
                    
                    <ul>
                    <Link to='/login'>login</Link>
                    <Link to='/Signup'>Signup</Link>
                    <Link to='/home'>Home</Link>
                    </ul>
                
                    </div>
              </Container>
         </div>
    </header>


    <section className='admin__menu p-0'>
      <Container>
        <Row>
            <div className="admin__navigation">
                <ul className="admin__menu-list">
                     {
                      admin__nav.map((item,index)=>(
                        <li className='admin__menu-item' key={index}>
                            <NavLink to={item.path} className={navClass=>navClass.isActive ? 'active__admin-menu' :
                             ''}>{item.display}</NavLink>
                        </li>
                      ))
                     }
                </ul>
            </div>
        </Row>
      </Container>

    </section>
    </>
  )
}

export default AdminNav
