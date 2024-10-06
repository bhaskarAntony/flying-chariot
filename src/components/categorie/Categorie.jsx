import React from 'react'
import './style.css'

function Categorie() {
  return (
    <section className='container-fluid categorie p-0 overflow-hidden'>
        <div className="row gap-0 p-0">
            <div className="col-md-6 p-0">
                <div className="categorie-card p-0">
                    <img src="https://static.wixstatic.com/media/e4f166_fd835a93708e42359f08b90fb73ecc45~mv2_d_7029_7087_s_4_2.jpg/v1/fill/w_960,h_1280,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e4f166_fd835a93708e42359f08b90fb73ecc45~mv2_d_7029_7087_s_4_2.jpg" alt="women" className='w-100' />
                </div>
            </div>
            <div className="col-md-6 p-0">
                <div className="categorie-card">
                    <img src="https://static.wixstatic.com/media/e4f166_425fdb4e99434f2faac1ae5d6b79ff2d~mv2_d_5254_5452_s_4_2.jpg/v1/fill/w_409,h_545,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e4f166_425fdb4e99434f2faac1ae5d6b79ff2d~mv2_d_5254_5452_s_4_2.jpg" alt="men" className='w-100' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Categorie