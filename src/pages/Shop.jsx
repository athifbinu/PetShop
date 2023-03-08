import React, { useState } from 'react'
import CmmonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import '../Style/shop.css'
import products from '../assets/data/products'
import ProductLists from '../components/UI/ProductList'
import { Container,Row,Col } from 'reactstrap'


const Shop = () => { 
    

  
  const [productsData,setProductsData]=useState(products)
  
    console.log(products)
  
   //filtering

  const handleFilter = (e) =>{
    const filterValue =e.target.value;
    if(filterValue === "Dog") {
      const filteredProducts =products.filter(
        (item) =>item.category === "Dog"
      );

      setProductsData(filteredProducts)
    }


       //cat
    if(filterValue === "Cat") {
      const filteredProducts =products.filter(
        (item) =>item.category === "Cat"
      );

      setProductsData(filteredProducts)
    }

      // toys
    if(filterValue === "Toys") {
      const filteredProducts =products.filter(
        (item) =>item.category === "Toys"
      );

      setProductsData(filteredProducts)
    }


       //feed Bowl
    if(filterValue === "Bowl") {
      const filteredProducts =products.filter(
        (item) =>item.category === "Bowl"
      );

      setProductsData(filteredProducts)
    }



    //medicine
    if(filterValue === "med") {
      const filteredProducts =products.filter(
        (item) =>item.category === "med"
      );

      setProductsData(filteredProducts)
    }

  }


  //serching


  const handleSerache = e =>{
    const SerchTerm =e.target.value;

    const SerchedProducts = products.filter(item => item.productName
    .toLowerCase().includes(SerchTerm.toLowerCase()))

    setProductsData(SerchedProducts)
  }
      
 



  return (
    <Helmet title='Shop'>
      
      <CmmonSection title='Products'/>


      <section>
        <Container>
          <Row>
              <Col lg='3' md='6'>
                <div className="filter__widget">
                  <select onClick={handleFilter} >
                  <option>Filter By Category</option>
                      <option value="Dog">Dog Food</option>
                      <option value="Cat">Cat food</option>
                      <option value="Toy">Toys</option>
                      <option value="Bowl">Feed Bowls</option>
                      <option value="med">Medicines</option>
                  </select>
                </div>
              </Col>
              <Col lg='3' md='6' className='text-end'>
              <div className="filter__widget">
                  <select >
                  <option>sort By Category</option>
                      <option value="ascending">Assending</option>
                      <option value="decending">Decending</option>
        
                  </select>
                </div>
              </Col>
              <Col lg='6' md='12'>
                 <div className="serch__box">
                    <input type="text"
                     placeholder='Serch.....'
                     onChange={handleSerache} />
                    <span>
                       <i class="ri-search-line"></i>
                    </span>
                 </div>
              </Col>
              
              
          </Row>
        </Container>

        <section className='pt-0'>
              <Container>
                <Row>
                  {  
                    productsData.length === 0? <h1 className='text-center fs-4'>No Products Are Frond</h1>
                    : <ProductLists data={productsData}/>
                  }
                </Row>
                
              </Container>
        </section>
      </section>
    </Helmet>
  )
 };

export default Shop
