import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'

import Collection from './pages/Collection'
import Home from './pages/home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/placeOrder'
import Orders from './pages/Orders'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Collection' element={<Collection/>}/ >
      <Route path='/About' element={<About/>}/ >
      <Route path='/Contact' element={<Contact/>}/ >
      <Route path='/product/productId' element={<Product/>}/ >
      <Route path='/Cart' element={<Cart/>}/ >
      <Route path='/Login' element={<Login/>}/ >
      <Route path='/PlaceOrder' element={<PlaceOrder/>}/ >
      <Route path='/Orders' element={<Orders/>}/ >


      
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
