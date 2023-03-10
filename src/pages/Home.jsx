

import { useEffect, useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.jpg'
import { Link } from 'react-router-dom'
import "../Style/home.css"
import {motion} from 'framer-motion'
import products from '../assets/data/products'

import Service from '../services/Service'
import ProductListOne from '../components/UI/ProductListOne'
import counterimg from '../assets/images/bowl/pet.png'
import Clock from "../components/UI/Clock"

import useGetDate from '../costum-hooks/useGetDate'


const Home = () => {

    const {data:products,loading} =useGetDate('products')
    console.log(products)

    const [TopbrandsProducts,setTopBrands]=useState([])
    const [DogFoods,setDogFoods]=useState([])
    const [catFoods,SetCatFoods]=useState([])
    const [Toys,setToys]=useState([])
    const [Bowl,setBowl]=useState([])
    const [medicines,setMedicines]=useState([])





    const year =new Date().getFullYear()

    useEffect(()=>{
      const filteredTopBrands =products.filter(
        (item)=>item.category === "brand" )
       
        const filteredDogFoods =products.filter(
          (item)=>item.category === "Dog" )

          const filteredcatFoods =products.filter(
            (item)=>item.category === "Cat" )


          const filteredtoys =products.filter(
            (item)=>item.category === "Toys" )

            const filteredFeedBowl =products.filter(
              (item)=>item.category === "Bowl" )
             

              const filteredmedicines =products.filter(
                (item)=>item.category === "med"
              )




        
            
       
        
        //brand
        setTopBrands(filteredTopBrands);
        //dog food
        setDogFoods(filteredDogFoods)
        //cat food
        SetCatFoods(filteredcatFoods)
        //toys
         setToys(filteredtoys)
        //feed bowl
        setBowl(filteredFeedBowl)
        //medicine
        setMedicines(filteredmedicines)



    },[products]);

    

  

     return <Helmet title={'home'}>
           <section className='hero_section'>
         <Container>
             <Row>
               <Col lg='6' md='6'>
                 <div className="hero__content">
                       <p className="hero__subtittle">
                         Trending Producs in {year} </p>
                      <h2>Mtm Vetinary Medicels <br /> & PetShop</h2>
                    <p>The Heaven of your Pets</p>
                  

                          
                            
                     <button className='buy__btn'><Link to="/shop">Shop Now</Link></button>
                </div>
               </Col>

              <Col lg='6' md='6'>
                <div className="hero__img">
                    <img  src={heroImg} alt="" />
                 </div>  
               </Col>
             </Row>

          </Container>
    </section>

     <Service/>
            
            {/* top brands */}
            <section className="trending__products">
                 <Container>
                  <Row>
                       <Col lg='12' className='text-center'>
                        <h2 className='section__title'>Top Brands</h2>
                       </Col>
                       {
                        loading ? <h5 className='fw-bold'>Loading...</h5> :
                        <ProductListOne data={TopbrandsProducts}/>
                       }
             
                    

                  </Row>
                 </Container>
            </section>
              
              {/* bestsale */}
            <section className='best-sales'>
              <Container>
              <Row>
                    <Col lg='12' className='text-center'>
                     <h2 className='section__title'>Dog Foods</h2>
                      </Col>
                        {
                          loading ? <h5 className='fw-bold'>Loading</h5> :
                          <ProductListOne data={DogFoods}/>   
                        }
                  </Row>
              </Container>
            </section>
             

             {/* cat foods */}

            <section className='best-sales'>
              <Container>
              <Row>
                    <Col lg='12' className='text-center'>
                     <h2 className='section__title'>Cat Foods</h2>
                      </Col>
                        {
                          loading ? <h5 className='fw-bold'>Loading</h5> :
                          <ProductListOne data={catFoods}/>
                        }   
                  </Row>
              </Container>
            </section>

           {/* timer */}
            <section className='timer__count'>
                   <Container>
                    <Row>
                       <Col lg='6' md='6' >
                        <div className="clock__top-content">
                          <h4 className='text-white fs-6 mb-2'>Limitted Shop</h4>
                          <h3 className='text-white fs-5 md-3'>Visit Our Shop</h3>
                        </div>
                             <Clock/>

                            <button className='cl-btn'>
                              <Link to="/shop">Visit Store</Link>
                              </button>
                       </Col>
                    
                       <Col lg='6' md='6' className='text-end' >
                        <img src={counterimg} alt="" />
                       </Col>
                       </Row>
                   </Container>
               </section>
                
               <section className='new__arrivals'>
                   <Container>
                      <Row>
                          <Col lg='12' className='text-center mb-5'>
                              <h2 className="section__title">Toys</h2>
                          </Col>
                          {
                            loading ? <h5 className='fw-bold'>Loading</h5> :
                             <ProductListOne data={Toys}/>
                          }

                      </Row>
                   </Container>
               </section>
                  

                  {/* bowls */}

               <section className='new__arrivals'>
                   <Container>
                      <Row>
                          <Col lg='12' className='text-center mb-5'>
                              <h2 className="section__title">Feed Bowls</h2>
                          </Col>

                          {
                            loading ? <h5 className='fw-bold'>Loading</h5>:
                            <ProductListOne data={Bowl}/>
                          }


                      </Row>
                   </Container>
               </section>
                
                  {/* medicin */}
                <section className='popular__category'>
                <Container>
                      <Row>
                          <Col lg='12' className='text-center mb-5'>
                              <h2 className="section__title">Medicines</h2>
                          </Col>
                          {
                            loading ? <h5 className='fw-bold'>Loading</h5> :


                           <ProductListOne data={medicines} />
                          }

                         <ProductListOne />


                      </Row>
                   </Container>
                </section>
     </Helmet>
     
}

export default Home




 
 
