import React from 'react'
import {motion} from 'framer-motion'
import '../../Style/product-card.css'
import {Col} from 'reactstrap'
import {Link} from "react-router-dom"

const ProductCard = ({item}) => {
  return (
    <Col lg='3' md='4' className='mb-2'>
            <div className="product_item">
                {/* proble */}
        <div className="product_img">       
            <motion.img whileHover={{scale:0.9}} src={item.imgUrl} alt="" />
        </div>

         <div className='p-2 product__info'>
         <h3 className="Product__name"><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
        <span >{item.category}</span>
         </div>

        <div className="product__card-button d-flex align-items-center justify-content-between p-2">
            <span className='price'>{item.price}</span>
            <motion.span whileTap={{scale:1.2}} span>
                <i class="ri-add-line"></i>
            </motion.span>
        </div>
       </div>
    
    </Col>
 
  )
}

export default ProductCard
