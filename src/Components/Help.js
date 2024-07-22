import React from 'react';
import './Help.css'; // Assuming you will style your component in a CSS file
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Help = () => {
  return (
    <div className="need-help">
      <div className="help-box">
        <FaWhatsapp className="help-icon" />
        <p>Message us on WhatsApp</p>
        <button className="learn-more-button">Learn More</button>
      </div>
      <div className="help-box">
        <FaPhoneAlt className="help-icon2" />
        <p>Call us for assistance</p>
        <button className="learn-more-button">Learn More</button>
      </div>
      <div className="help-box">
        <FaEnvelope className="help-icon3" />
        <p>Email us your queries</p>
        <button className="learn-more-button">Learn More</button>
      </div>
    </div>
  );
};

export default Help;
