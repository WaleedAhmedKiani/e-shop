import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Order from './Pages/Order'
import PlaceOrder from './Pages/PlaceOrder'
import Product from './Pages/Product'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import SearchBar from './Components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import Verify from './Pages/Verify'

const App = () => {
  return (
    <div className="px-10 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify/>}/>
      </Routes>
      <Footer/>

    </div>
  )
}

export default App