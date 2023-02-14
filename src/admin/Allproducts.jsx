import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import productImg from '../assets/images/medicines/medicin5.jpg'
const Allproducts = () => {
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
                     <tr>
                      <td> <img src={productImg} alt="" /></td>
                      <td>himalaye erine ep Shamboo </td>
                      <td>Medicine</td>
                      <td>258</td>
                      <td><button className='btn btn-danger'>Delete</button></td>
                     </tr>
                  </tbody>
              </table>
           </Col>
        </Row>
        </Container>      
    </section>
  )
}

export default Allproducts
