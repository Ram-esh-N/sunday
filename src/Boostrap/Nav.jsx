import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'
export default function Nav() {
  return (
  
    <div>
        <div className="header">
            <div className="logo">
            <h1 className='nav-head'>P<span>o</span>rtFolio</h1>
            </div>
            <input type="checkbox"  id="nav-check" hidden/>
            <nav>
            {/* <div className="logo" hidden>
                 <h1>porfolio</h1>
            </div> */}
            <ul>
            <Link to="/"> <li className='nav-li'><a  className="a"href="Home"></a>Home</li></Link>
            <Link to="/skill"> <li className='nav-li'><a href="skill" className='sk'></a>skill</li></Link>
            <Link to="/about"> <li className='nav-li'><a href="about"></a>about</li></Link>
            <Link to="/project"> <li className='nav-li'><a href="project"></a>project</li></Link>
                {/* <li><a href="Home">Home</a></li>
                <li><a href="Home">About</a></li>
                <li><a href="Home">Contact</a></li>
                <li><a href="Home">Protact</a></li>
                <li><a href="Home">Email</a></li>
                <li><a href="Home">Compose</a></li> */}
            </ul>
            </nav>
            <label htmlFor="nav-check" className='tog'>
                <div></div>
                <div></div>
                <div></div>
            </label>
        </div>
    </div>
  )
}
