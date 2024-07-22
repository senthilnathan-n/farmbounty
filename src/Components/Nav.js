// Nav.js

import React from 'react';
import './Nav.css'; // Make sure to import the CSS file
import logo from '../Images/FBlogo2.png';
const Nav = () => {
  return (
    <nav className="navbar">
      <img 
        src= {logo}
        alt="Logo" 
        className="navbar-logo" 
      />
      
      <ul className="navbar-links">
        <li><a href="#buy">BUY</a></li>
        <li><a href="#sell">SELL</a></li>
        <li><a href="#gardening">GARDENING</a></li>
        <li><a href="#animal-husbandry">ANIMAL HUSBANDRY</a></li>
        <li><a href="#animal-husbandry">EQUIPMENTS</a></li>
        <li><a href="#animal-husbandry">ORGANIC</a></li>
        <li><a href="#about-us">ABOUT US</a></li>
      </ul>
      <div className="navbar-profile">
        
          <i className="fas fa-user-circle"></i>
        </div>
    </nav>
  );
}

export default Nav;
