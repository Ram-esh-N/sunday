import React, { useEffect } from 'react'
import ".//Navbar/Skil.css"
import html from "../assets/download (1).png"
import javaspt from "../assets/download.png"
import react from "../assets/download (3)-i3ps6cha.png"
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function Skill() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div>
      <div className="head-tech">
        <div className="head-con2" data-aos="fade-zoom in">
          <h1 className='tck-head'>Tech Stack</h1>
        </div>
      </div>
      
      <div className="tesc-skill" >
        <div className="skils" data-aos="fade-left">
          <img src={html} className='skil-img' alt="" />

     <h2 className='h22'>HTML&CSS</h2>
          <p className="para">Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.</p>
        </div>
        <div className="skils" data-aos="fade-up" >
          <img src={javaspt} className='skil-js' alt="" />
     <h2 className='h22'>javascript</h2>
          <p className="para">Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality</p>
        </div>
        <div className="skils" data-aos="fade-right" >
          <img src={react} className='skil-img' alt="" />
               <h2 className='h22'>React</h2>
          <p className="para">Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.</p>
        </div>
      </div>
    </div>
  )
}
