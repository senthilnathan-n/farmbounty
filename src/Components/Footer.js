import React from 'react';
import './Footer.css'; // Assuming you will style your component in a CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <img src="/path-to-your-logo.png" alt="Website Logo" className="footer-logo" />
        <p className="footer-description">
          Welcome to our website! We offer a wide range of products and services to meet your needs. Our goal is to provide the best possible experience for our customers.
        </p>
      </div>
      <div className="footer-section">
        <h4>Address</h4>
        <p>1234 Street Name</p>
        <p>City, State, ZIP Code</p>
        <p>Country</p>
      </div>
      <div className="footer-section">
        <h4>Categories</h4>
        <ul className="footer-categories">
          <li>Category 1</li>
          <li>Category 2</li>
          <li>Category 3</li>
          <li>Category 4</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
