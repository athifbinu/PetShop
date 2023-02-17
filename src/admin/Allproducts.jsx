import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import {db} from '../FireBase/Firebase.config.js'
import {doc,deleteDoc} from 'firebase/firestore'
import {toast} from "react-toastify"


import useGetDate from '../costum-hooks/useGetDate'



const Allproducts = () => {

  const {data:productData,loading} =useGetDate('products')

  //admin product delete
  const deleteProduct = async(id)=>{
    await deleteDoc(doc(db,'products',id))
    toast.success("Product Deleted")
  }

  console.log(productData)

  return (
    <section>
      <Container>
        <Row>
           <Col lg='12'>
              <table className='table'>
                  <thead>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>category</th>
                        <th>Price</th>
                        <th>
                            Actions
                        </th>
                      </tr>
                  </thead>
                  <tbody>
                     {
                      loading ? <h3 className='py-5 text-center fw-bold'>loading..</h3>
                      :  
                        productData.map(item=>(
                          <tr key={item.id}>
                      <td> <img src={item.imgUrl} alt="" /></td>
                      <td>{item.title}</td>
                      <td>{item.category}</td>
                      <td>{item.price}</td>
                      <td>
                        <button onClick={()=>
                          {deleteProduct(item.id)}}
                           className='btn btn-danger'>Delete</button>
                      </td>
                     </tr>
                        ))
                      }
                  </tbody>
              </table>
           </Col>
        </Row>
        </Container>      
    </section>
  )
}

export default Allproducts
