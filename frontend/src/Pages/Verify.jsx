import React from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useSearchParams } from "react-router";
import {toast} from 'react-toastify'
import { useEffect } from 'react';

const Verify = () => {

    const { Navigate, token, setCartItems, backendUrl } = useContext(ShopContext)
    const [searchParams, setSearchParams] = useSearchParams()

    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')

    const verifyPayment = async () => {

        try {
            
            if (!token) {
                return null
            }

            const response = await axios.post(backendUrl+ '/api/orders/verifyStripe',{success,orderId},{headers:{token}})

            if (response.data.success) {
                setCartItems({})
                Navigate('/order')
            } else {
                Navigate('/cart')
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
            
        }

    }

    useEffect(() => {
      verifyPayment()
    
     
    }, [token])
    
  return (
    <div className='font-semibold '>Paymet</div>
  )
}

export default Verify