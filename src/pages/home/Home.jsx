import React from 'react'
import './style.css'
import Hero from '../../components/hero/Hero'
import Categorie from '../../components/categorie/Categorie'
import CountDown from '../../components/countdown/CountDown'
import Videos from '../../components/videos/Videos'

function Home() {
  return (
    <section>
        <Hero/>
        <marquee direction="left" scrollamount="10" className='p-2 primary-bg scroll1'> <p className="fs-6 m-0 text-white fw-5">Join Us in Celebrating with Grand Discounts and Exciting Offers!</p></marquee>
        <marquee direction="right" scrollamount="10" className="secondary-bg p-2"> <p className="fs-6 scroll2 m-0 fw-bold"> For a limited time only – Shop now and enjoy up to 50% off on select items!</p></marquee>
        <Categorie/>
        <Videos/>
        <CountDown/>

    </section>
  )
}

export default Home