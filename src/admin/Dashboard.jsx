import React from 'react'
import {Container,Row,Col} from 'reactstrap'

import "../admin-style/dashboard.css"
import userGetDate from '../costum-hooks/useGetDate'


const Dashboard = () => {

  const {data:products}= userGetDate('products')
  const {data:users}= userGetDate('user')
  const {data:orders}=userGetDate('orders')


  return (
    <>
    <section>
      <Container>
          <Row>
            <Col className='lg-3'>
                <div className="revenue__box">
                  <h5>Totel Sales</h5>
                  <span>4545</span>
                </div>
            </Col>
            <Col className='lg-3'>
            <div className="order__box">
                  <h5>Orders</h5>
                  <span>{orders.length}</span>
                </div>
            </Col>
            <Col className='lg-3'>
            <div className="products__box">
                  <h5>Totel Products</h5>
                  <span>{products.length}</span>
                </div>
            </Col>

            <Col className='lg-3'>
            <div className="user__box">
                  <h5>Totel Users</h5>
                  <span>{users.length}</span>
                </div>
            </Col>

  

          

          </Row>
      </Container>
    </section>
     
    </>
  )
}

export default Dashboard
