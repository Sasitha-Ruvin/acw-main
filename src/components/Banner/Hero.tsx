import React from 'react'
import banner from '../../Images/mainbanner.png'
import mobileBanner from '../../Images/mobile.png'
export default function Hero() {
  return (
    <section className='text-center'>
        <picture>
          <source media='(max-width:800px' srcSet={mobileBanner}/>
          <img src={banner} alt="banner" className='mx-auto w-full h-85 object-cover'style={{ height: '80vh', objectFit: 'cover' }} />
        </picture>
    </section>
  )
}
