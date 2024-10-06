import React from 'react'
import './style.css'

function Footer() {
  return (
    <section className='p-3 p-md-5 py-5 secondary-bg'>
        <footer>
           <div className="row">
            <div className="col-md-3">
            <h1 className="fs-4 fw-6">Customer Care</h1>
            <ul>
                <li className="small"><a href="#">FAQ </a></li>
                <li className="small"><a href="#">Shipping & Returns  </a></li>
                <li className="small"><a href="#">Store Policy </a></li>
             
            </ul>
            </div>

            <div className="col-md-2">
            <h1 className="fs-4 fw-6">Connect</h1>
            <ul>
                <li className="small"><a href="#">Instagram </a></li>
                <li className="small"><a href="#">Twitter </a></li>
                <li className="small"><a href="#">Facebook</a></li>
                <li className="small"><a href="#">Contact</a></li>
             
            </ul>
            </div>

            <div className="col-md-3">
            <h1 className="fs-4 fw-6">The Company</h1>
            <ul>
                <li className="small"><a href="#">About </a></li>
                <li className="small"><a href="#">Sustainability </a></li>
                <li className="small"><a href="#">Accessibility</a></li>
                <li className="small"><a href="#">Store Locator</a></li>
            </ul>
            </div>
            <div className="col-md-4">
                <h1 className="fs-4 fw-6 mb-3">Sign up for special offers</h1>
                    <label htmlFor="email" className="small">Enter your email here<span className="text-danger">*</span></label>
                    <input type="text" className="form-control p-2 rounded-0" />
                    <button className="btn-main w-100 mt-3">Submit</button>
            </div>
            
           </div>
        </footer> 
    </section>
  )
}

export default Footer