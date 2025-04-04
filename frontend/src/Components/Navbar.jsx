import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const {setShowSearch, getCartCount,  Navigate, token, setToken, setCartItems} = useContext(ShopContext);

    const logout = () => {
        Navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
       
    }
    return (
        <div className='flex items-center justify-between py-2 font-semibold '>
           <Link to={'/'}><img src={assets.logo} className="w-36" /></Link> 

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

                <NavLink to='/' className="flex flex-col gap-1 items-center text-base">
                    <p>Home</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />

                </NavLink>

                <NavLink to='/collection' className="flex flex-col gap-1 items-center text-base">
                    <p>Collection</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />

                </NavLink>

                <NavLink to='/about' className="flex flex-col gap-1 items-center text-base">
                    <p>About</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />

                </NavLink>

                <NavLink to='/contact' className="flex flex-col gap-1 items-center text-base">
                    <p>Contact</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />

                </NavLink>

            </ul>

            <div className='flex items-center gap-6'>
                <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

                <div className='group relative' >
                    <img onClick={()=> token ? null : Navigate('/login')} src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
                    {/* dropDown Menue */}

                    {token && <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded text-sm'>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p onClick={()=>Navigate('/order')} className='cursor-pointer hover:text-black'>Orders</p>
                            <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>}

                </div>
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-red-600 text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>

                <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
            </div>

            {/* Sidebar Menue for Small Screen */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={()=> setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img src={assets.dropdown_icon} className='h-4 -rotate-180' alt="" />
                        <p>Back</p>
                    </div>

                    <NavLink onClick={()=>setVisible(false)} to='/' className='py-2 pl-6 border text-base'>Home</NavLink>
                    <NavLink onClick={()=>setVisible(false)} to='/collection'className='py-2 pl-6 border text-base'>Collection</NavLink>
                    <NavLink onClick={()=>setVisible(false)} to='/about'className='py-2 pl-6 border text-base'>About</NavLink>
                    <NavLink onClick={()=>setVisible(false)} to='/contact' className='py-2 pl-6 border text-base'>Contact</NavLink>

                </div>
            </div>


        </div>
    )
}

export default Navbar