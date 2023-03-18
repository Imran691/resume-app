import { skillSet } from 'data/skills-data'
import Image from 'next/image'
import React from 'react'

export default function Skills() {
  return (
    <section id="skills">

    <div className='pt-8 md:pt-12 text-center'>
  
        <h1 className='text-primary-default text-3xl md:text-4xl font-bold mb-14'>Technical Skills</h1>
      

        <div className='flex flex-wrap items-center justify-center gap-24 md:gap-12 mb-14'>
        {skillSet.map( (skill) => (
          <div key={skill.id} className="skill" data-text={skill.experience}>
            <Image src={skill.src} alt={skill.title} width={50} height={50}/>
            </div>
            ))}
            </div>
    </div>
            </section>
  )
}
