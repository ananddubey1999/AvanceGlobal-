import React from 'react'
import { Link } from "react-router-dom";
import LogoImage from '../../logo1.png';
import './Navbar.css'; 

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id='Nav1'>
                <div className="container py-2">
                <Link className="navbar-brand" to="/">
          <img src={LogoImage} alt="Waleedcodes Logo" className="logoStyle"/>
        </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* means */}
                    <div className="collapse navbar-collapse align-middle" id="navbarNav">
                        <ul className="navbar-nav ms-auto nav_ul align-items-center">
                            <li className="nav-item dropdown">
                                <Link  className="nav-link dropdown-toggle larger-about" to="/Product" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Product</Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/Product">Products</Link></li>
                                    <li><a className="dropdown-item" href="/Product">InsureITPro</a></li>
                                    <li><a className="dropdown-item" href="/Product">InvestAI</a></li>
                                    <li><a className="dropdown-item" href="/Product">AvanceTest</a></li>
                                    <li><a className="dropdown-item" href="/Product">AvanceEdu Pro</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link  className="nav-link dropdown-toggle larger-about" to="/AvanceSolution" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Solution</Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/AvanceSolution">Solutions</Link></li>
                                    <li><a className="dropdown-item" href="/Infrastructure">Infrastructure</a></li>
                                    <li><a className="dropdown-item" href="/ERPSolution">Custom Software Development</a></li>
                                    <li><a className="dropdown-item" href="/AvanceSolution">PMO Outsourcing</a></li>
                                    <li><a className="dropdown-item" href="/AvanceSolution">Call Center Setup & Operations</a></li>
                                    <li><a className="dropdown-item" href="/ERPSolution">Customized ERP Solutions</a></li>
                                    <li><a className="dropdown-item" href="/AvanceSolution">Digital Marketing</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link  className="nav-link dropdown-toggle larger-about" to="/Trainings" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Training</Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/Trainings">Trainings</Link></li>
                                    <li><a className="dropdown-item" href="/Trainings">On Demand IT/Software Trainings</a></li>
                                    <li><a className="dropdown-item" href="/Trainings">Compliance at Workplace</a></li>
                                    <li><a className="dropdown-item" href="/Trainings">Technical Analysis for Capital Markets</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link larger-about textEffect" to="/DiscoverAvance">Discover Avance</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link larger-about textEffect" to="/Porfolio">Porfolio</Link>
                            </li>
                            <Link className="nav-link larger-about" to="/GetFreeQuote" >
                            <button
                               type="button"
                               className="btn1 mx-2"
                               style={{
                               borderRadius: '30px',
                               backgroundColor: '#5da8f8',
                               color: 'white',
                               border: 'none',
                               padding: '10px 20px',
                               paddingLeft:'20px',
                               fontSize: '18px',
                               transition: 'background-color 0.3s ease',
                                       }}
                                onMouseOver={(e) => e.target.style.backgroundColor = '#346ef6'}
                                onMouseOut={(e) => e.target.style.backgroundColor = '#5da8f8'}
                              >
                               Get Free Quotes
                            </button>
                            </Link>

                        </ul>
                    </div>
                    {/* end */}
                </div>
            </nav>
        </>
    )
}

export default Navbar
