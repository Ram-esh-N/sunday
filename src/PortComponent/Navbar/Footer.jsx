import React, { useEffect } from 'react'
import link from "../Navbar/img/download (3).png"
import twiter from "../Navbar/img/download (4).png"
import email from "../Navbar/img/download (5).png"
import "../Navbar/Footer.css"
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div>
      <div className="con-footer">
        <div className="footer">
          <h1 className='nav-head' >P<span>o</span>rfolio</h1>
          <a href="https://www.linkedin.com/in/ramesh-n-3a2105287"> <img src={link} className='foot-img' width={30} alt="" data-aos="fade-right" /> </a>
          <a href="#"><img src={twiter} className='foot-img1' width={40} alt="" data-aos="fade-up" /></a>
          <a href="#"><img src={email} className='foot-img' width={30} alt="" data-aos="fade-right" /></a>
          <h5 className='footer-text'>Home  My work My clints My Blog Conact Me</h5>
          <h5 className='footer-text'>Terms of use Privcy policy</h5>
        </div>
      </div>
    </div>
  )
}
