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

    const [open,seOpen]=useState(false)

     


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
                <span className='badge bg-black'>{totalQuantity}</span>
                </span>

                  {/* userimg */}
                <div className='profile' onClick={()=>{seOpen(!open)}} >
                  <motion.img
                   whileTap={{scale:1.1}}
                   src={currentUser?currentUser.photoURL: userIcon}
                    alt=""
                     />
               
                </div>

         


             

        


                
                <div className="profile__actions"
                  >
                    { currentUser ?(
                       <span onClick={logout}>Logout</span>
                        ): (

                    
                    <></>
                    

                    )}
                </div>


         
                
              </div>

    

 
                   
                <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i class="ri-menu-line"></i>
                </span>
                 </div>
                 

        
                  
            </div>

            <div className={`drop-down ${open? 'active':'inaactive'}`}>
                    
                    <ul>
                    <Link to='/login'>login</Link>
                    <Link to='/Signup'>Signup</Link>
                    <Link to='/dashboard'>Dashboard</Link>
                    </ul>
                
             </div>

                
          </Row>
       </Container>
  </header>
}

export default Header


{/* <Link to='/Signup'>Signup</Link>
<Link to='/login'>login</Link>
 <Link to='/dashboard'>Dashboard</Link> */}

