import React from 'react'
import Title from '../Components/Title'
import {assets} from '../assets/assets'
import Newsletter from '../Components/Newsletter'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'Us'}/>

      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Welcome to Online Shopping, your trusted online marketplace for high-quality products at unbeatable prices.
           We are committed to providing a seamless and enjoyable shopping experience,
           ensuring that our customers receive the best value, top-notch service, and fast delivery.</p>
        <p>we believe in making online shopping simple, secure, and convenient. Whether you're looking for the latest fashion, electronics, home essentials, or accessories, 
          we've got you covered with a wide selection of products carefully chosen to meet your needs.</p>
          <b className='text-gray-700'>Our Mission</b>
          <p>Our mission is to bring you a hassle-free shopping experience with top-quality products, excellent customer service, and fast shipping.
             We aim to make online shopping easy and accessible for everyone.</p>
        </div>

      </div>

      <div className='text-2xl py-5'>
        <Title text1={'Why'} text2={'Choose Us'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>✅ Fast & Reliable Shipping </b>
          <p className='text-gray-600'>  We ensure timely delivery so you can enjoy your purchases quickly.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>✅ Wide Range of Products</b>
          <p className='text-gray-600'> From fashion to electronics, we have something for everyone.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>✅ Secure Shopping </b>
          <p className='text-gray-600'> Your privacy and security are our top priorities.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>✅ Customer Satisfaction  </b>
          <p className='text-gray-600'> We are committed to providing excellent service and support.</p>
        </div>
      </div>
      <Newsletter/>
    </div>
  )
}

export default About