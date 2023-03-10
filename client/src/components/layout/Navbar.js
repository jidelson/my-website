import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Home from '../pages/Home';

function Navbar() {
  return (
    <NavContainer>
      <nav className="navbar navbar-expand-lg bg-dark">
        <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" style={{ width: "45px" }} />
        </Link>
        <button 
        className="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
          <span>
            <i className="fas fa-bars" style={{color: '#fff'}}></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <Link className="nav-link text-uppercase ml-5" to="/">
                Home&nbsp;<i class="fas fa-home"></i> <span class="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase ml-5" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase ml-5" to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase ml-5" to="/resume">Resume</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase ml-5" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </NavContainer>  
  )
}

export default Navbar;

const NavContainer = styled.div`

.nav-link{
  color:white;
  display: flex;
  justify-content: space-between;
}

.nav-link:hover{
  /* color:rgba(172, 172, 172); */
  color: turquoise;
}

`
