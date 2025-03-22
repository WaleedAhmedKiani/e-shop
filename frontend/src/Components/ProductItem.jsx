import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const ProductItem = ({id,name,image,price}) => {

    const {currency} = useContext(ShopContext);
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`} >
        <div className='overflow-hidden'>
            <img src={image[0]} className='hover:scale-110 transition ease-in-out' alt="" />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}&nbsp;{price} </p>
    </Link>
  )
}

export default ProductItem