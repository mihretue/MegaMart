import React from 'react'
import { Link } from 'react-router-dom'
import MegaMartBillboard7 from '../image/MegaMartBillboard7.png'
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mx-3">
      <Link className="navbar-brand rounded " to="#">
        <img src={MegaMartBillboard7} alt="Logo" className='rounded-circle' style={{width:'7rem', height:'6rem'}}/>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav fw-bolder  ">
          <li className="nav-item ">
            <Link className="nav-link text-primary" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-primary" to="/product">Product</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-primary" to="/about">About</Link>
          </li>
          <li>
            <Link className="nav-link text-primary" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
