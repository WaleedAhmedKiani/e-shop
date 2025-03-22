import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const {products} = useContext(ShopContext);
    const [latestproduct, setLatestProduct] = useState([]);

    useEffect(() => {
      setLatestProduct(products.slice(0,10));
    }, [products])
    
    
  return (
    <div className='my-10'>
        <div className='text-center py-10 text-3xl'>
            <Title text1={'Latest'} text2={'Collections'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Discover our newest arrivals—fresh, stylish, and budget-friendly! From fashion to electronics,
             we bring you the latest trends with top-notch quality. </p>
        </div>

        {/* Rendering Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestproduct.map((item,index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }

        </div>

    </div>
  )
}

export default LatestCollection