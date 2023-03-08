import React from 'react'
import ProductCard from '../UI/ProductCard'


const ProductList = ({data}) => {
  return (
    <>


     {
        data?.map((item,index)=>(
            <ProductCard item={item} key={index}/>
            
        ))

     }
    
    </>
  )
}

export default ProductList


