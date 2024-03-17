import React, { useEffect } from 'react'
import ".//Navbar/Project.css"
import project1 from "../assets/download (2).png"
import project2 from "../assets/images (1).jpeg"
import project3 from "../assets/images (1).png"
import Footer from './Navbar/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function Project() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div>
      <div className="project-con">
          <div className="projects" data-aos="fade-left">
        <a href="https://projecttwo-rouge.vercel.app/">
            <img src={project1} className="immmg" width={270} height={200} alt="" />
            <h3 className='por-head3'>Project-1</h3>
            <p className='para2
          '>Priorities include completing online course modules, organizing my workspace, researching vacation destinations, hitting the gym, and meal planning for the week ahead.
            </p>
        </a>
          </div>
          <div className="projects" data-aos="fade-up">
        {/* <a href="https://testone-rho.vercel.app/"> */}
            <img src={project2} className="immmg" width={270} height={200} alt="" />
            <h3 className='por-head3'>Project-2</h3>
            <p className='para2'>
              Craft your portfolio to succinctly showcase your best work, providing clear descriptions and visuals to captivate viewers and highlight your skills effectively.</p>
        {/* </a> */}
          </div>
        <div className="projects" data-aos="fade-right">
          <img src={project3} className="immmg" width={270} height={200} alt="" />
          <h3 className='por-head3'>Project-3</h3>
          <p className='para2
          '>
            Make your shopping experience efficient by creating a detailed list of needed items, comparing prices, and considering any budget constraints to ensure a successful. </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
