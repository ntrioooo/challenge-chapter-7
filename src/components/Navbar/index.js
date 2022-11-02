import * as React from 'react'

function Navbar() {
  return (
    <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={{backgroundColor: "#F1F3FF"}}>
            <div className="container">
            <a className="navbar-brand" href="#home"><img src="assets/logo.png" alt="Logo"/></a>
            <button className="btn btn__offcanvas" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#our__services">Our Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#why__us">Why Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#testimonial">Testimonial</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#faq">FAQ</a>
                </li>
                </ul>
                <button type="button" className="button">Register</button>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar