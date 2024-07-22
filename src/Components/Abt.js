import React from 'react';
import '../Components/Abt.css'; // You can create a CSS file to style your component
import abt from '../Images/abt.jpeg'
const Abt = () => {
  return (
    <div className="intro-container">
      <div className="image-section">
        <img src={abt}alt="Intro" />
      </div>
      <div className="text-section">
        <h1>Welcome to My Webpage</h1>
        <p>
          This is an introduction to my webpage. Here, you can find various resources and information about the topics that interest you.
        </p>
      </div>
    </div>
  );
};

export default Abt;
