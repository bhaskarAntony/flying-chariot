import React from 'react'
import './style.css'

function Hero() {
  return (
    <section className='hero p-3 p-md-5 text-center'>
        <h1 className="display-3 fw-3">Welcome to the Grand Opening of <span className="text-main">Flying Chariot!</span></h1>
        <p className="fs-6 text-secondary"><i>Discover amazing deals, exclusive products, and a shopping experience <br /> like never before.</i></p>
       
        <button className='btn-main mt-3'>SHOP NOW</button>
    </section>
  )
}

export default Hero