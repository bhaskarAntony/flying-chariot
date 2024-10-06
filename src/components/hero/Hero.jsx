import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

function Hero() {
    const navigate = useNavigate();
  return (
    <section className='hero p-3 p-md-5 text-center'>
        <h1 className="display-3 fw-3">Welcome to the Grand Opening of <span className="text-main">Flying Chariot!</span></h1>
        <p className="fs-6 text-secondary"><i>Discover amazing deals, exclusive products, and a shopping experience <br /> like never before.</i></p>
       
        <button className='btn-main mt-3' onClick={()=>navigate('/shop')}>SHOP NOW</button>
    </section>
  )
}

export default Hero