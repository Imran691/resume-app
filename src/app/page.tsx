
import Education from 'components/Education'
import About from 'components/About'
import Mentors from 'components/Mentors'
import Skills from 'components/Skills'

import React from 'react'
import HomeSec from 'components/HomeSec'

export default function Home() {
  return (
    <div>
    <HomeSec/>
    <About/>
    <Skills/>
    <Education/>
    
    <Mentors/>
    </div>
  )
}
