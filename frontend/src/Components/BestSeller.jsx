import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useState } from 'react';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const {products} = useContext(ShopContext)
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
      const bestProduct = products.filter((item)=>(item.bestseller));
      setBestSeller(bestProduct.slice(1,14))
     
    }, [products])
    
  return (
  <div className='my-10'>
    <div className='text-center text-3xl py-8'>
        <Title text1={'Best'} text2={'Sellers'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Our top-selling product is a must-have! Loved by customers for its quality, affordability, and reliability.
         Get yours today before it’s gone </p>
    </div>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            bestSeller.map((item,index)=>(
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
            ))
        }
    </div>
  </div>
  )
}

export default BestSeller