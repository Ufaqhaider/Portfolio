import React, { useState } from 'react';
import Topbar from './components/topbar'
import Intro from './components/Intro/Intro';
import Testimonial from './components/About/About'
import Works from './components/works/Works'
import Portfolio from './components/Portfolio/portfolio'
import Contact from './components/Contact/Contact'
import Hamburger from './components/Hamburger'

export default function App() {
  const [bar,Setbar]=useState(true)
  return (
    <>
    <div className='app'>
      <Topbar bar={bar} Setbar={Setbar}/>
      <Hamburger bar={bar} Setbar={Setbar}/>
      <div className='sections'>
        <Intro/>
        <Testimonial/>
        <Portfolio/>
        <Contact/>
        <Works/>


      </div>
    </div>
    </>
  )
}
