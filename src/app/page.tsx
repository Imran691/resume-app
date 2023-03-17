import React from 'react'

import HomeSec from 'components/HomeSec'
import About from 'components/About'
import Skills from 'components/Skills'
import Dots from 'components/dots'
import Portfolio from 'components/Portfolio'

export default function Home() {
  return (
    <div>
    <HomeSec/>
    <About/>
    <Skills/>
    <Dots/>
    <Portfolio/>
    </div>
  )
}
