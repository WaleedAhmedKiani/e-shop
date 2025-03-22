import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from '../Components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../Components/CartTotal';

const Cart = () => {

  const {products, currency, cartItems, updateQuantity, Navigate} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {

    if (products.length > 0) {

      const temp =[];
      for(const items in cartItems){
        for(const item in cartItems[items]){
          if(cartItems[items][item]> 0){
            temp.push({
              _id: items, size: item, quantity: cartItems[items][item]
            })
          }
        }
      }
      setCartData(temp);

    }
   
  
   
  }, [cartItems,products])
  
  return (
    <div className='border-t pt-12'>

      <div className='text-2xl mb-3'>
        <Title text1={'Cart'} text2={'Summary'}/>
      </div>

      <div>
        {
          cartData.map((item,index)=>{

            const ProductData = products.find((product)=> product._id === item._id);
            return (
              <div className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4' key={index}>
                <div className='flex items-start gap-6'>
                  <img src={ProductData.image[0]} className='w-16 sm:w-20' alt="" />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{ProductData.name} </p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}&nbsp;{ProductData.price} </p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size} </p>
                    </div>
                  </div>
                </div>
                <input onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id,item.size,Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type='number' min={1} defaultValue={item.quantity}/>
                <img onClick={()=>updateQuantity(item._id,item.size,0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />
              </div>
            )
          })
        }
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
          <div className='w-full text-end'>
            <button onClick={()=>Navigate('/place-order')} className='bg-blue-500 text-white text-sm my-8 px-8 py-3'>Proceed To Checkout</button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Cart