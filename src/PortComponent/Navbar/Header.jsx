import React from 'react'
import { Link } from 'react-router-dom'
import "../Navbar/Header.css"
import Footer from './Footer'
// import logo from "../assets/Portfolio.hu_full_logo.png"

export default function Header() {
         
  return (
    <div>
      <header>
      <div className="nav">
        <div className="navbar">
        <div className="content1">
             <h1 className='nav-head'>P<span>o</span>rtFolio</h1>
          </div>
          <input type="checkbox"  id="nav-check" hidden/>
          <nav>
              {/* <div className="logo" hidden>
                 <h1>porfolio</h1>
            </div> */}
          <div className="content2">
            <ul>
            <Link to="/"> <li className='nav-li'><a  className="a"href="Home"></a>Home</li></Link>
            <Link to="/skill"> <li className='nav-li'><a href="skill"></a>skill</li></Link>
            <Link to="/about"> <li className='nav-li'><a href="about"></a>about</li></Link>
            <Link to="/project"> <li className='nav-li'><a href="project"></a>project</li></Link>
            </ul>
            {/* <Link to="/"> <li className='nav-li'><a  className="a"href="Home"></a>Home</li></Link>
            <Link to="/skill"> <li className='nav-li'><a href="skill"></a>skill</li></Link>
            <Link to="/about"> <li className='nav-li'><a href="about"></a>about</li></Link>
            <Link to="/project"> <li className='nav-li'><a href="project"></a>project</li></Link> */}
          </div>
          </nav>
          <label htmlFor="nav-check" className='tog'>
                <div></div>
                <div></div>
                <div></div>
            </label>
        </div>      
      </div>
      </header>
    
     

    </div>
  )
}
