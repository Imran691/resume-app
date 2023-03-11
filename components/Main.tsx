import Image from 'next/image'
import React from 'react'
import MyImage from "../public/images/picme.png"
import { personalData } from 'data/page-data'

export default function Main() {
  let {name,message, aboutMe} = personalData;
  return (
    <div className='flex flex-col sm:flex-row justify-center py:2 sm:py-10 bg-white px-2 sm:px-12 font-serif'>
      
        <div className='w-full sm:w-2/5'>
        <Image src={MyImage} alt="my-image" className='rounded-xl'/>
        </div>

        
        <div className='w-full sm:w-3/5 px-2 md:px-16 py-2 md:py-10'>
          <div className='shadow-xl rounded-xl px-2 md:px-6 p-2'>
            <p className='font-bold text-2xl leading-relaxed pt-10 text-stone-600'>{name} </p>
            <p className='font-bold text-2xl leading-relaxed  text-stone-600'>{message}</p>
            </div>

            <div>
            <p className='text-normal  text-justify pt-12 leading-relaxed shadow-xl rounded-xl px-6'>{aboutMe}</p>
            </div>

            <div>
            <button className='mt-16 p-2 md:p4 rounded-lg bg-stone-700 text-lg text-white '>Get in touch</button>
            </div>
        </div>
    </div>
  )
}
