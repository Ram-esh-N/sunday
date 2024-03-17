import React, { useEffect } from 'react'
import "./Navbar/About.css"
import about from "../assets/Pasted image.png"
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div>
      <div className="con-abut-main-1">
        <div className="con-abut1" data-aos="fade-zoom in">
          <h1 className='code-head'>Code And Coffee</h1>
          <hr />
          <p className='para-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint maiores itaque doloribus asperiores dolorum quas voluptates distinctio, porro beatae quam provident libero animi totam, praesentium voluptatem corrupti dignissimos ipsum accusantium!</p>
        </div>
        <div className="con-abut" data-aos="fade-zoom in">
          <img src={about} width={500} className='code-img' alt="" />
        </div>
      </div>
     

    </div>
  )
}
