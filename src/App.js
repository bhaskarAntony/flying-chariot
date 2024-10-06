import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Pnf from './pages/Pnf/Pnf'
import Blur from './components/blur/Blur'
import Shop from './pages/shop/Shop'


function App() {
  return (
    <div>
      {/* <Blur/> */}
      <div className='thorana1'>
        <img src='https://img1.picmix.com/output/stamp/normal/4/2/7/9/1929724_53e34.gif'/>
      </div>
      <div className='thorana2'>
        <img src='https://img1.picmix.com/output/stamp/normal/4/2/7/9/1929724_53e34.gif'/>
      </div>
   
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/*' element={<Pnf/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App