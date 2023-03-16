import { works } from 'data/works-data'
import Image from 'next/image'
import React from 'react'

export default function Skills() {
  return (
    <div className='flex flex-col justify-center py-4 bg-slate-100 px-16 font-serif'>
        <div className='flex justify-center items-center my-4'>
        <h1 className='font-bold text-4xl text-indigo-800 mb-8'>Works</h1>
        </div>

        <div className='flex flex-wrap justify-around'>
        {works.map( (wrk) => (
        <div key={wrk.id} className="px-2 shadow-lg">
            <Image src={wrk.src} alt={wrk.title} width={60} height={60} className="rounded-full"/>
            <h1 className='text-lg  text-center pt-2 leading-10'>{wrk.title}</h1>
            <p className='text-lg  text-center pt-2 leading-10'>{wrk.intro}</p>
            </div>
            ))}
            </div>
    </div>
  )
}
