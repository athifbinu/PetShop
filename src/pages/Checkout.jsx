import React, { useState } from 'react'
import { Container,Row,Col,FormGroup,Form } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'


import '../Style/Checkout.css'
import { useSelector } from 'react-redux'
import {db,storage} from "../FireBase/Firebase.config"
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import {toast} from "react-toastify"
import {addDoc,collection} from 'firebase/firestore'

const Checkout = () => { 

  const totalQty =useSelector(state=>state.cart.totalQuantity )
  const totalAmount =useSelector(state=>state.cart.totalAmount)
   
  const navigate =useNavigate();
   
  
   const [enterName,setEnterName]=useState('')
   const [enterEmail,setEnterEmail]=useState('')
   const [enterPone,setEnterPone]=useState('')
   const [enterAdress,setEnterAdress]=useState('')
   const [enterCity,setEnterCity]=useState('')
   const [enterPostal,setEnterPostal]=useState('')
   const [enterCountry,setEnterCountry]=useState('')
   const [Totelqty,seTotelqty]=useState(0)
   const [TotelAmt,setTotelamt]=useState(0)
   const [payment,setPayment]=useState('')
   const [subTotel,setSubTotel]=useState(0)
  //  const [loading,setLoading]=useState(false)

  const userCollectionref =collection(db,'orders')


   const handleSubmit =(e)=>{
       e.preventDefault();
      
     addDoc(userCollectionref,{
      name:enterName,
      email:enterEmail,
      pone:enterPone,
      adress:enterAdress,
      city:enterCity,
      postal:enterPostal,
      country:enterCountry,
      Totelqty:Totelqty,
      TotelAmt:TotelAmt,
      payment:payment,
      subTotel:subTotel,
      


       
 
     }).then(()=>{
    
      Swal.fire(
        'Order Plased Succesfully',
        'You clicked the button!',
        'success'
      )
     })
     .catch((err)=>{
      console.log("form not Submited",err)
     })
       
   }



  
  return (
    <Helmet>
        <CommonSection title="Checkout"/>
        <section>
          <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold '>Billing Information</h6>
               <Form className='billing__form mt-5' onSubmit={handleSubmit} >
                
                    <FormGroup className='form__group '>
                        <input className='wl fw-bold' value={enterName} onChange={e=>setEnterName(e.target.value)}
                         type="text" placeholder='Enter Your Name'
                         required />
                    </FormGroup>

                    <FormGroup className='form__group'>
                        <input className='wl fw-bold' type="email"
                         placeholder='Enter Your Email'
                         value={enterEmail} onChange={e=>setEnterEmail(e.target.value)}
                          required />
                    </FormGroup>

                    <FormGroup className='form__group'>
                        <input className='wl fw-bold' type="number" placeholder='Phone Number'
                        value={enterPone} onChange={e=>setEnterPone(e.target.value)}
                         required />
                    </FormGroup>

                    <FormGroup className='form__group'>
                        <input className='wl fw-bold' type="text" placeholder='Street Adress'
                         value={enterAdress} onChange={e=>setEnterAdress(e.target.value)}
                          required />
                    </FormGroup>

                    <FormGroup className='form__group'>
                        <input className='wl fw-bold' type="text" placeholder='Enter Your City'
                        value={enterCity} onChange={e=>setEnterCity(e.target.value)}
                         required />
                    </FormGroup>


                    <FormGroup className='form__group'>
                        <input className='wl fw-bold' type="text" placeholder='Postal code'
                        value={enterPostal}  onChange={e=>setEnterPostal(e.target.value)}
                         required />
                    </FormGroup>

                    <FormGroup className='form__group'>
                        <input className='wl fw-bold' type="text" placeholder='Country'
                        value={enterCountry} onChange={e=>setEnterCountry(e.target.value)} 
                        required />
                    </FormGroup>

                    <div className="checkout__cart">
                          <h6 value={Totelqty} onChange={e=>seTotelqty(e.target.value)} >Total qty: <span>{totalQty} items</span></h6>
                          <h6 value={TotelAmt} onChange={e=>setTotelamt(e.target.value)}>SubTotel: <span>{totalAmount}</span></h6>
                          <span value={payment} onChange={e=>setPayment(e.target.value)} >Payment:

                            <div className='pay'>
                            <label >COD</label>
                            <input className='Ml' type={'checkbox'}></input>
                            <br/>
                            <label >ONLINE</label>
                            <input className='Ml' type={'checkbox'}></input>
                            </div>
                          
                          </span>
                          <br/>
                          <h4 value={subTotel} onChange={e=>setSubTotel(e.target.value)}>
                            Total Cost: <span>{totalAmount}</span>
                          </h4>

                          <button onClick={handleSubmit} className='buy__btn text-black bg-white w-100 '>Place Order</button>
                    
                     </div>




                    


                    

              
                 </Form>

               </Col>


             {/* <Col lg='4'>
                     <div className="checkout__cart">
                          <h6>Total qty: <span>{totalQty} items</span></h6>
                          <h6>SubTotel: <span>{totalAmount}</span></h6>
                          <span>Payment:

                            <div className='pay'>
                            <label >COD</label>
                            <input className='Ml' type={'checkbox'}></input>
                            <br/>
                            <label >ONLINE</label>
                            <input className='Ml' type={'checkbox'}></input>
                            </div>
                          
                          </span>
                          <br/>
                          <h4>
                            Total Cost: <span>{totalAmount}</span>
                          </h4>

                          <button onClick={handleSubmit} className='buy__btn text-black bg-white w-100 '>Place Order</button>
                    
                     </div>
             </Col>  */}
              

       
        
             </Row>
          </Container>
        </section>
    </Helmet>
  )
}


export default Checkout
