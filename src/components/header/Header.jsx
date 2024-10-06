import React from 'react'
import './style.css'
import CountDown from '../countdown/CountDown'

function Header() {
  return (
    <header>
        <div className="top text-center">
            <p className="fw-bold prime-color-bg m-0 p-2">Grand Opening on Sunday</p>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light p-3 border-bottom ">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold" href="#"><img src="https://ecommerce-sigma-mauve.vercel.app/static/media/logo.4f88b26cef25eb70d9b1.png" alt="logo" className='logo' /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/no">Women</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link" href="/no">Men</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/no">Shop All</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/no">About</a>
        </li>
      </ul>
         <div className='d-flex gap-2 align-items-center'>
         <a href='' class="nav-link">Contact</a>
         <i class="bi bi-bag-heart-fill fs-4"></i>
         </div>
    </div>
  </div>
</nav>

    </header>
  )
}

export default Header