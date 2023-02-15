import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import {ref,uploadBytesResumable,getDownloadURL} from "firebase/storage"
import { doc, setDoc } from 'firebase/firestore';

import {auth} from "../FireBase/Firebase.config"
import { storage } from '../FireBase/Firebase.config';
import {toast} from 'react-toastify'
import {db} from "../FireBase/Firebase.config"


import '../Style/login.css'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  
   
  
  const [username,setName]=useState('')

  const [email,setEmail]=useState('')
  
  const [password,setPassword]=useState('')

  const [loading,setLoading]=useState(false)
  

  const [file,setFile]=useState(null)

  const navigate=useNavigate()
  

  const signup =async(e)=>{
      e.preventDefault()
      setLoading(true)
      try {
           
           const userCredintial =await createUserWithEmailAndPassword(auth,email,password)
          
           const user =userCredintial.user

          const storageref=ref(storage,`images/${Date.now() + username}`)

          const uploadTask =uploadBytesResumable(storageref,file)
           
          uploadTask.on((error)=>{
             toast.error(error.message)
          },()=>{
              getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
                //update user profile
              await updateProfile(user,{
                  displayName:username,
                  photoURL:downloadURL
                });
                     
                //store user data in firestore databse

                await setDoc(doc(db,'user',user.uid),{
                  uid:user.uid,
                  displayName:username,
                  email,
                  photoURL:downloadURL,

                })
 
              })
          })


           console.log(user)
           setLoading(false)
           toast.success("account created")
           navigate('/login')

      }catch(error) {
            setLoading(false)
            toast.error("someting went wrong")
      }
  }
  
   
  return (
    <Helmet title="Signup">
       <section>
           <Container>
               <Row>
                  {
                    loading? <Col lg='12' className='tetx-center'>
                      <h6 className='fw-bold'>Loading...</h6>
                      </Col> :
                            <Col lg='6' className='m-auto text-center'>
                            <h3 className='fw-bold mb-4'>Signup</h3>
      
                            <Form className='auth__form' onSubmit={signup}>
                               <FormGroup className='form__group'>
                                      <input type="text" placeholder='Enter your UserName' value={username}
                                       onChange={e=> setName(e.target.value)}  />
                               </FormGroup>
      
                               <FormGroup className='form__group'>
                                      <input type="email" placeholder='Enter your Email' value={email}
                                       onChange={e=> setEmail(e.target.value)}  />
                               </FormGroup>
      
                               <FormGroup className='form__group'>
                                      <input type="password" placeholder='Enter your Password'
                                          value={password}  onChange={e=> setPassword(e.target.value)} />
                               </FormGroup>
                               
      
                               <FormGroup className='form__group'>
                                      <input type="file" 
      
                                       onChange={e=> setFile(e.target.files[0])} />
                               </FormGroup>
                            
      
                               <button type='submit' className='buy__btn bg-white text-black '>Create an account</button>
                               <p>already have an account?<Link to='/Login'>Login</Link> </p>
      
                            </Form>
                            
                        </Col>
                  }
               </Row>
           </Container>
       </section>
    </Helmet>
  )
}

export default Signup