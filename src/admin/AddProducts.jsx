
import React, { useState } from 'react'
import { Form,FormGroup,Container,Row,Col } from 'reactstrap'
import {toast} from 'react-toastify'
import {db,storage} from '../FireBase/Firebase.config'
import  {ref,uploadBytesResumable,getDownloadURL} from "firebase/storage"
import {collection,addDoc} from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'



const AddProducts = () => {


  const [enterTitle,setEnterTitle] =useState('')
  const [enterShortDesc,setEnterShortSesc] =useState('')
  const [enterDescription,setEnterDescription] =useState('')
  const [enterCategory,setEntnterCategory] =useState('')
  const [enterPrice,setEnterPrice] =useState('')
  const [enterProductImg,setEnterProductImg] =useState(null)
  const [loading,setLoading]=useState(false)

  const navigate =useNavigate()

  const addProduct = async(e)=>{
    e.preventDefault();
  
    setLoading(true)
  




    // add product to the firebase db

     try {
       const docRef =await collection(db,'products')


       const storageRef =ref(storage,`productImages/${Date.now() +
         enterProductImg.name}`)
         const uploadTask =uploadBytesResumable(storageRef,enterProductImg)

         uploadTask.on(()=>{
            toast.error("images not uploaded")
         }, ()=>{
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL)=>{
              await addDoc(docRef, {
                title:enterTitle,
                shortDesc:enterShortDesc,
                description:enterDescription,
                category:enterCategory,
                price:enterPrice,
                imgUrl:downloadURL
                
              })
            })
        
         }
         
         )

         setLoading(false)
         toast.success("Product added successfully")
         navigate('/dashboard/all-products')
          

     }catch (err) {
          setLoading(false)
          toast.error('product not added'+err)
     }
  
  
  }

  return (
    
    <section >
     <Container >
       <Row className='fl'>
        <Col lg='12'>
            {
              loading ? (<h4 className='py-5'>Loading..</h4>
              ) : 
              <>
              <h4 className='mb-5 '>Add Products</h4>
             <Form onSubmit={addProduct}>
                <FormGroup className='form__group'>
                    <span>Product Title</span>
                    <br />
                    <input type="text" className='wl' placeholder='Pedigree'
                     value={enterTitle}
                     onChange={e=>setEnterTitle(e.target.value)}
                      required />
                </FormGroup>
                <FormGroup className='form__group'>
                    <span>Short Description</span>
                    <br />
                    <input type="text" className='wl' placeholder='loren ..'
                     value={enterShortDesc} onChange={e=>setEnterShortSesc(e.target.value)}
                    required />
                </FormGroup>

                <FormGroup className='form__group'>
                    <span>Description</span>
                    <br />
                    <input type="text"className='wl' placeholder='Description'
                     value={enterDescription} onChange={e=>setEnterDescription(e.target.value)}
                     required />
                </FormGroup>


                <div  className='d-flex align-items-center gap-5 '>
                <FormGroup className='form__group w-50'>
                    <span>Price</span>
                        <br />
                    <input type="number"  placeholder='Enter Price'
                     value={enterPrice}
                      onChange={e=>setEnterPrice(e.target.value)}
                      required />
                </FormGroup>


                <FormGroup className='form__group w-50 '>
                    <span>Category</span>
                    <br />
                    <select className='w-100 p-2'
                     value={enterCategory} 
                     onChange={e=>setEntnterCategory(e.target.value)} >
                        <option >Select Category</option>
                        <option value="brand">Top Brands</option>
                        <option value="Dog">Dog Food</option>
                        <option value="Cat">Cat Food</option>
                        <option value="Toys">Toys</option>
                        <option value="Bowl">Feed Bowls</option>
                        <option value="med">Medicines</option>
                    </select>
                </FormGroup>
                </div> 

                 <div>
                <FormGroup className='form__group '>
                    <span>Product Image</span>
                    <br />
                     <input 
                     type="file" 
                     onChange={e=>setEnterProductImg(e.target.files[0])}
                     required/>
                </FormGroup>
                </div>

                <button className='buy__btn btn' type='submit'>Add Product</button>
             </Form>
              </>
            }
        </Col>
       </Row>
      </Container>      
    </section>
  )
}

export default AddProducts
