import Image from 'next/image'
import React from 'react'
import Profile from "../public/images/pic2.png"

export default function HomeSec() {
  return (
    <section id="homeSec" className='home-section container'>
    <div className='order-2 md:order-1 mt-10 '>
      <h2 className='text-5xl md:text-7xl font-bold m-2'>Hi</h2>
      <h2 className='text-5xl md:text-7xl font-bold mt-2'>I am <span className='text-primary-default'>Muhammad Imran</span></h2>
      <h3 className='text-2xl md:text-3xl font-bold opacity-70 mt-5 mb-10'>Full stack Web Developer</h3>
      <a href='#portfolio' className='btn-primary'>See my work</a>
    </div>
    <div className='cantainer-my-image'>
      <Image
      className='w-full h-full object-cover opacity-90 object-center'
      src={Profile}
      alt="profile-pic"
      />
    </div>
    </section>
  )
}
