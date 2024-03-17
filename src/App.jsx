import { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './PortComponent/Navbar/Header'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './PortComponent/Home'
import Skill from './PortComponent/Skill'
import About from './PortComponent/About'
import Project from './PortComponent/Project'
import Nav from './Boostrap/Nav'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
         <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/skill' element={<Skill/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/project' element={<Project/>}></Route>
        </Routes>

        </BrowserRouter>
      </div>
     
    </>
  )
}

export default App
