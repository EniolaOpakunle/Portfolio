import React from 'react'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'

function Navbar() {
  return ( 
    <header className=''>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">EnnyHub.</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item mx-3">
                  {/* <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link> */}
                  <a href="/#" className='nav-link active' aria-current = "page"> Home</a>
                </li>
                <li>
                  <a href="/#about" className='nav-link'> About me</a>
                </li>
                <li className="nav-item mx-3">
                  <a href="/#projects" className='nav-link' >Projects</a>

                </li>
                <li className="nav-item mx-3">
                  <a href="/#contact" className='nav-link'>contact</a>
                </li>
                <li className='nav-item button rounded-pill px-2'>
                  <a href=" " className='nav-link'>Download CV</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </header>
  )
}

export default Navbar