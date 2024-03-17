import React, { useEffect } from 'react'
import "./Navbar/Home.css"
import baner from "../assets/main-qimg-d7337ab2826314111e170fc5d334fb00.jpeg"
import About from './About'
import Skill from './Skill'
import Project from './Project'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Home() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div>
      <div className="container">
           <div className="sub1 col-sm-5 m-5 gap-5 rounded h-5" data-aos="fade-up">
                <h1 className='head1'>I'm Ramesh</h1>
                <h2 className='head2'>Front-End Developer</h2>
                <h3 className='head3'>Turning ideas Into Interactive Reality</h3>
           </div>
           <div className="sub2 col-sm-4 gap-5 rounded" data-aos="fade-down">
            <img src={baner} width={500} className='img' height={550} alt="" />
           </div>
      </div>
      <Skill/>
        <About/>
        <Project/>
      <div className='d'></div>
    </div>
  )
}
