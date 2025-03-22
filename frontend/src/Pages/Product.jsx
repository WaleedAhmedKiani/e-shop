import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../Components/RelatedProduct';

const Product = () => {

  const {id} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('')

  const fetchProductData = async () => {
    products.map((item,index) => {
      if(item._id === id) {
        setProductData(item)
        setImage(item.image[0])
       // console.log(item)
        return null;
      } 

    })

  } 

  useEffect(() => {
    fetchProductData();
  
 
  }, [id,products])
  
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index) => (
                <img onClick={()=> setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div>

          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto' alt="" />
          </div>
        </div>
        {/*  Product Information */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name} </h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className='pl-2'>(130)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}&nbsp;{productData.price} </p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description} </p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {
                productData.sizes.map((item,index) => (
                  <button onClick={()=>setSize(item)} key={index} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-green-950' : ""}`}> {item} </button>
                ))
              }

            </div>
          </div>

          <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>Add To Cart</button>
          <hr className='mt-8 sm:w-4/5'/>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% original product</p>
            <p>Cash on delivery is available </p>
            <p>Easy return and exchange Policy within 10 days</p>
          </div>

        </div>

      </div>
      {/* Description & Review Section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews(130)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Experience all-day comfort with our premium cotton t-shirt. Made from 100% breathable fabric, it keeps you cool and fresh. 
            The soft texture ensures a smooth feel against your skin. Designed for a perfect fit, it enhances your casual style effortlessly.
            Available in multiple colors to match any outfit. The durable stitching ensures long-lasting wear.
            A classic round-neck design makes it versatile for any occasion. Pair it with jeans, joggers,
            or shorts for a trendy look. Machine washable and easy to maintain. Elevate your wardrobe with this must-have essential
            </p>
            <p>The smooth texture provides a gentle feel against your skin. Designed for a sleek fit, it effortlessly enhances your casual look.
               Available in various colors to complement any wardrobe. Strong stitching ensures durability for long-lasting wear.
                The classic round-neck design makes it ideal for any occasion. Pair it effortlessly with jeans, joggers, or shorts for a stylish outfit.
               Easy to wash and maintain for everyday use. Upgrade your wardrobe with this must-have staple</p>
        </div>
      </div>
      {/* Display related Products */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : <div className='opacity-0'></div>
}

export default Product