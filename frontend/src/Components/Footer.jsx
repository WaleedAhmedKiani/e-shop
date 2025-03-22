import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

                <div>
                    <img src={assets.logo} className='mb-5 w-32' alt='' />
                    <p className='w-full md:w-2/3 text-gray-600'>
                    © 2024 E-Shopping | Quality products, great deals, and 24/7 support. Shop with confidence
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>Company</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>

                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>Get In Touch</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+1-333-555-87654</li>
                        <li>E_Shop.Online@hotmail.com</li>
                    </ul>
                </div>

            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>
                © 2024 E-Shop. All rights reserved. | Secure & hassle-free shopping experience 🛍️
                </p>
            </div>
             </div>

    

    )
}

export default Footer