import React from 'react'
import image1 from '../../components/images/i1.JPG'
import image2 from '../../components/images/i2.JPG'
import image3 from '../../components/images/i3.JPG'
import image4 from '../../components/images/i4.JPG'
import image5 from '../../components/images/i5.JPG'
import image6 from '../../components/images/i6.JPG'
import image7 from '../../components/images/i7.JPG'
import image8 from '../../components/images/i8.JPG'
import image9 from '../../components/images/i9.JPG'
import image10 from '../../components/images/i10.JPG'

function Shop() {
    const data = [
        image1,
        image2, 
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
    ]
  return (
    <section className='p-3 p-md-5 container-fluid'>
        <div className="row">
            {
                data.map((item, index)=>(
                    <div className="col-md-3">
                        <div className="shop-card mb-3">
                            <img src={item} alt="" className="w-100 rounded-3" />
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Shop