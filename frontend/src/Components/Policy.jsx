import React from 'react'
import { assets } from '../assets/assets'

const Policy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>📦 Easy Exchange Policy</p>
            <p className='text-gray-400'> If you're not satisfied, swap it for another item.</p>
        </div>

        <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>🔄 10-Day Return Policy</p>
            <p className='text-gray-400'>Return your purchase within 10 days for a free refund or exchange.</p>
        </div>

        <div>
            <img src={assets.support_img} className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>📞 Customer Support</p>
            <p className='text-gray-400'>contact us 24/7 for quick assistance</p>
        </div>
    </div>
  )
}

export default Policy