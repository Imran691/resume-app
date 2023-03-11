import { skillSet } from 'data/skills-data'
import Image from 'next/image'
import React from 'react'

export default function Skills() {
  return (
    <div className='flex justify-center py-10 bg-slate-100 px-16 font-serif'>
        <div>
        <h1 className='font-bold text-4xl leading-relaxed pt-15 text-indigo-800 text'>Technical Skills</h1>
        </div>

        <div className='flex'>
        {skillSet.map( (skill) => (
        <div key={skill.id} className="px-10">
            <Image src={skill.src} alt={skill.title} width={60} height={60} className="rounded-full"/>
            <h1 className='text-lg  text-center pt-2 leading-10'>{skill.title}</h1>
            {/* <p className='text-lg  text-center pt-2 leading-10'>{skill.intro}</p> */}
            </div>
            ))}
            </div>
    </div>
  )
}
