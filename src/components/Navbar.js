import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand text-light" href="#">EnnyHub</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item mx-5">
            <Link className="nav-link active text-light" aria-current="page" to={'/'}>Home</Link>
          </li>
          <li className="nav-item mx-5">
            <Link className="nav-link text-light" to={'/profile'} >Profile</Link>
          </li>
          <li className="nav-item mx-5">
            <Link className="nav-link text-light" to={'/projects'}> Projects </Link>
          </li>
          <li className="nav-item mx-5">
            <Link className="nav-link text-light" to={'/contact'}> Contacts</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar