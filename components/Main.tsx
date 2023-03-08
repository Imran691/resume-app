import Image from 'next/image'
import React from 'react'
import MyImage from "../public/images/picme.png"
import { personalData } from 'data/page-data'

export default function Main() {
  return (
    
    <div className='flex justify-center py-10 bg-slate-100 px-16 font-serif'>
        <div className='w-2/5'>
        <Image src={MyImage} alt="my-image"/>
        </div>

        
        <div className='w-3/5 px-20'>
            <p className='font-bold text-4xl leading-relaxed pt-15 text-indigo-800'>{personalData.name} </p>
            <p className='font-bold text-4xl leading-relaxed text-indigo-800'>{personalData.message}</p>
            
            <p className='text-lg  text-justify pt-16 leading-10'>{personalData.aboutMe}</p>

            <button className='border-black pt-40'>Get in touch</button>
        
        </div>
    </div>
  )
}
