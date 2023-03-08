import React from 'react'
import ProductcrdOne from "../UI/ProductCrdOne"
const ProductListOne = ({data}) => {
  return (
    <>


    {
       data?.map((item,index)=>(
           <ProductcrdOne item={item} key={index}/>
       ))

    }
   
   </>
      
    
  )
}

export default ProductListOne
