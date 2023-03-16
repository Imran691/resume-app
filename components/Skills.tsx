import { skillSet } from 'data/skills-data'
import Image from 'next/image'
import React from 'react'

export default function Skills() {
  return (
    <section id="skills">

    <div className='mt-32 text-center'>
  
        <h1 className='text-primary-default text-3xl md:text-4xl font-bold mb-14'>Technical Skills</h1>
      

        <div className='flex flex-wrap items-center justify-center gap-24 md:gap-12'>
        {skillSet.map( (skill) => (
          <div key={skill.id} className="skill">
            <Image src={skill.src} alt={skill.title} width={60} height={60}/>
            </div>
            ))}
            </div>
    </div>
            </section>
  )
}
