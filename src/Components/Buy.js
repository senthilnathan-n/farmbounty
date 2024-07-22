import React from 'react';
import './Buy.css';
import Nav from '../Components/Nav.js'
import im1 from '../Images/veg.jpg';
import im2 from '../Images/c3.jpeg';
import im3 from '../Images/meat.jpg';
import TextSlider from './TextaSlider.js';
import Footer from './Footer.js';
const Buy = () => {
  return (
    <>

    <Nav/>
    <br/>
    <br/>
    <br/>
   
    <div style={{color:"red",fontSize:"larger"}}>
      <b>
        <TextSlider  text="**At Farm Bounty, you can buy fresh vegetables, meat, and milk directly from farmers, ensuring the highest quality and supporting local agriculture. Enjoy farm-fresh produce delivered straight to your doorstep.**" />
        </b>
    </div>

  
    <div className="container">
      <div className="card" style={{ backgroundImage: `url(${im1})` }}>
        <div className="content">
         
          <button className="button">VEGETABLES</button>
        </div>
      </div>
      <div className="card" style={{ backgroundImage: `url(${im2})` }}>
        <div className="content">
          
          <button className="button">MILK</button>
        </div>
      </div>
      <div className="card" style={{ backgroundImage: `url(${im3})` }}>
        <div className="content">
          
          <button className="button">MEAT</button>
        </div>
      </div>
    
    
    </div>

    <Footer/>
   
    </>
  );
};

export default Buy;
