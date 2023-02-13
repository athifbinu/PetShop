import React, { useEffect, useRef, useState } from 'react'
import {NavLink,useNavigate} from 'react-router-dom'
import './Header.css'

import {motion} from 'framer-motion'

import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'
import { Container,Row,Badge } from 'reactstrap'
import { useSelector } from 'react-redux'
import useAuth from '../../costum-hooks/useAuth'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import {auth} from '../../FireBase/Firebase.config'
import { toast } from 'react-toastify'


const nav__links =[
  {
    path:'home',
    display:'home'
  },
  {
    path:'shop',
    display:'shop'
  },
  {
    path:'cart',
    display:'cart'
  },

]
const Header = () => {

  const hederRef =useRef(null)

   //to find totel quantity of product
  const totalQuantity = useSelector(state=>state.cart.totalQuantity)

  const profileActionref =useRef(null)

  const menuRef =useRef(null)
  const navigate =useNavigate();
  const {currentUser} =useAuth()  //to show user icon

  const stickyHeaderfunc = () =>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 80 ||
         document.documentElement.scrollTop > 80 
          ) {
        hederRef.current.classList.add('sticky__header')
      } else{
        hederRef.current.classList.remove('sticky__header')
      }
    })
  }
     const logout =()=>{
        signOut(auth).then(()=>{
           toast.success("logged out")
           navigate('/home')
        }).catch(err=>{
          toast.error(err.message)
        })
     }

    useEffect(()=>{
      stickyHeaderfunc()

      return ()=> window.removeEventListener('scroll',stickyHeaderfunc)
    })



    const menuToggle =()=> menuRef.current.classList.toggle('active__menu')


    const navigateToCart =()=>{
        navigate('/Cart')   //routing to cart
    }

    const toggleProfileActions =()=>
    profileActionref.current.classList.
    toggle('show__profileActions')




  return <header className='header' ref={hederRef}>
       <Container>
        <Row>
          <div className="nav__wrapper">

               <div className="logo">
                <img src={logo} alt="logo" />
                <div>
                  <h1>Mtm Petshop</h1>
                </div>
               </div>


               <div className="navigation" ref={menuRef} onClick={menuToggle}>
                <ul className="menu">
             
                 {
                  nav__links.map((item,index)=>(
                     <li className='nav__item' key={index}>
                      <NavLink to={item.path}
                       className={(navClass)=>
                        navClass.isActive ? 'nav__active ':''}>{item.
                      display}</NavLink>
                     </li>
                  ))
                 }
             
                 
                </ul>
               </div>

               <div className="nav__icons">

                <span className='fav__icon'>
                <Badge className='badge bg-black' >5</Badge>
                <i class="ri-heart-line"></i>

                </span>

                <span className='cart__icon' onClick={navigateToCart}>
                <i class="ri-shopping-bag-line"></i>
                <span className='badge'>{totalQuantity}</span>
                </span>


                <div className='profile' >
                  <motion.img
                   whileTap={{scale:1.1}}
                   src={currentUser?currentUser.photoURL: userIcon}
                    alt="" onClick={toggleProfileActions}
                     />
                   
           


           
               
                </div>
                <div className="profile__actions"
                  ref={profileActionref}
                  onClick={toggleProfileActions}
                  >
                    { currentUser ?(
                       <span onClick={logout}>Logout</span>
                        ): (
                       <div className='d-flex align-items-center  flex-column'>
                             <Link to='/Signup'>Signup</Link>
                             <Link to='/login'>login</Link>
                        </div>
                    )}
                </div>
              </div>
                   
                <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i class="ri-menu-line"></i>
                </span>
               </div>
             </div>
          </Row>
       </Container>
  </header>
}

export default Header


