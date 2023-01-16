import React from 'react'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'

function Navbar() {
  return ( 
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid ">
      <a className="navbar-brand" href="#">EnnyHub</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item mx-3">
            <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
          </li>
          {/* <li className="nav-item mx-5">
            <Link className="nav-link text-light" to={'/profile'} >Profile</Link>
          </li>
          <li className="nav-item mx-5">
            <Link className="nav-link text-light" to={'/projects'}> Projects </Link>

          </li> */}
          <li className="nav-item mx-3">
            <Link className="nav-link" to='contact' smooth = {true} duration = {1000}> Contacts</Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link" to='projects' smooth = {true} duration = {1000}> Projects </Link>

          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link" to='contact' smooth = {true} duration = {1000}> Contacts</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar