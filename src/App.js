import React, { useState } from 'react';
import Card from './Components/Card.js';
import Checkout from './Components/Checkout.js';
import './Components/Card.css'; // Make sure to import the CSS file


import Nav from './Components/Nav.js';
import trolleyIcon from './Images/trolley.png';
import TextSlider from './Components/TextaSlider.js';
// Import more images as needed

import tomato from './Images/tomato.jpg';
import potato from './Images/potato.jpg';
import spinach from './Images/spinach.jpg';
import cauliflower from './Images/cauliflower.jpg';
import apple from './Images/apple.jpg';
import carrot from './Images/carrot.jpg';
import mint from './Images/mint.jpg';
import onion from './Images/onion.jpg';
import banana from './Images/banana.jpg';
import brinjal from './Images/brinjal.jpg';
import coriander from './Images/coriander.jpeg';

import ginger from './Images/ginger.jpeg';
import guava from './Images/guava.jpeg';
import lettuce from './Images/lettuce.jpeg';
import  pome from './Images/Pome.jpeg';
import radish from './Images/radish.jpeg';
import  orange from './Images/orange.jpeg';
import cabbage from './Images/cabage.jpeg';
import lemon from './Images/lemon.jpeg';
import chilli from './Images/chilli.jpeg';
import pumpkin from './Images/pumpkin.jpeg';
import mango from './Images/mango.jpeg';
import sweet from './Images/sweet.jpeg';
import papaya from './Images/papaya.jpeg';
import bitter from './Images/bitter.jpeg';

import fenu from './Images/fenu.jpeg';
import turnip from './Images/turnip.jpeg';
import curry from './Images/curry.jpeg';
import watermelon from './Images/watermelon.jpeg';
import capsikum from './Images/capsikum.jpeg';

const App = () => {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCheckCartMessage, setShowCheckCartMessage] = useState(false);
  const [counts, setCounts] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('All');

  const vegetables = [
    { name: 'Tomato', category: 'Fruit', image: tomato, actualPrice: 5, offerPrice: 3, offerPercentage: 40 },
{ name: 'Potato', category: 'Root', image: potato, actualPrice: 3, offerPrice: 2, offerPercentage: 33 },
{ name: 'Carrot', category: 'Root', image: carrot, actualPrice: 3, offerPrice: 2.5, offerPercentage: 17 },
{ name: 'Mint', category: 'Herb', image: mint, actualPrice: 1.5, offerPrice: 1, offerPercentage: 33 },
{ name: 'Onion', category: 'Bulb', image: onion, actualPrice: 2.5, offerPrice: 2, offerPercentage: 20 },
{ name: 'Banana', category: 'Fruit', image: banana, actualPrice: 4, offerPrice: 3, offerPercentage: 25 },
{ name: 'Brinjal', category: 'Fruit', image: brinjal, actualPrice: 3.5, offerPrice: 2.5, offerPercentage: 29 },
{ name: 'Coriander', category: 'Herb', image: coriander, actualPrice: 1.8, offerPrice: 1.2, offerPercentage: 33 },
{ name: 'Ginger', category: 'Root', image: ginger, actualPrice: 6, offerPrice: 4, offerPercentage: 33 },
{ name: 'Guava', category: 'Fruit', image: guava, actualPrice: 7, offerPrice: 5, offerPercentage: 29 },
{ name: 'Lettuce', category: 'Leaf', image: lettuce, actualPrice: 3.5, offerPrice: 2.5, offerPercentage: 29 },
{ name: 'Pomegranate', category: 'Fruit', image: pome, actualPrice: 9, offerPrice: 7, offerPercentage: 22 },
{ name: 'Radish', category: 'Root', image: radish, actualPrice: 2, offerPrice: 1.5, offerPercentage: 25 },
{ name: 'Cabbage', category: 'Leaf', image: cabbage, actualPrice: 3.5, offerPrice: 2.5, offerPercentage: 29 },
{ name: 'Orange', category: 'Fruit', image: orange, actualPrice: 6, offerPrice: 4, offerPercentage: 33 },
{ name: 'Lemon', category: 'Fruit', image: lemon, actualPrice: 4.5, offerPrice: 3, offerPercentage: 33 },
{ name: 'Chili', category: 'Fruit', image: chilli, actualPrice: 2.5, offerPrice: 2, offerPercentage: 20 },
{ name: 'Pumpkin', category: 'Fruit', image: pumpkin, actualPrice: 5, offerPrice: 3.5, offerPercentage: 30 },
{ name: 'Capsicum', category: 'Fruit', image: capsikum, actualPrice: 3.5, offerPrice: 2.5, offerPercentage: 29 },
{ name: 'Mango', category: 'Fruit', image: mango, actualPrice: 10, offerPrice: 7, offerPercentage: 30 },
{ name: 'Sweet Potato', category: 'Root', image: sweet, actualPrice: 4, offerPrice: 3, offerPercentage: 25 },
{ name: 'Papaya', category: 'Fruit', image: papaya, actualPrice: 5, offerPrice: 3.5, offerPercentage: 30 },
{ name: 'Bitter Gourd', category: 'Fruit', image: bitter, actualPrice: 3, offerPrice: 2, offerPercentage: 33 },
{ name: 'Fenugreek', category: 'Herb', image: fenu, actualPrice: 2, offerPrice: 1.5, offerPercentage: 25 },
{ name: 'Turnip', category: 'Root', image: turnip, actualPrice: 2.5, offerPrice: 2, offerPercentage: 20 },
{ name: 'Curry Leaves', category: 'Herb', image: curry, actualPrice: 1.5, offerPrice: 1, offerPercentage: 33 },
{ name: 'Watermelon', category: 'Fruit', image: watermelon, actualPrice: 8, offerPrice: 5, offerPercentage: 37 }
  ];

  const categories = ['All', 'Root', 'Flower', 'Leaf', 'Fruit', 'plant', 'herbs'];

  const addProduct = (vegetable, weight) => {
    setCart([...cart, { vegetable, weight }]);
  };

  const rows = [];
  for (let i = 0; i < vegetables.length; i += 3) {
    rows.push(vegetables.slice(i, i + 3));
  }

  const clearCart = () => {
    setCart([]);
    setCounts({});
    setShowCheckout(false); // Close checkout overlay when the cart is cleared
  };

  const handleTrolleyClick = () => {
    setLoading(true);
    setShowCheckout(true);
    setShowCheckCartMessage(false); // Hide the message when trolley is clicked
    const trolleyImage = document.querySelector('.trolley img');
    trolleyImage.classList.add('rotate');

    setTimeout(() => {
      trolleyImage.classList.remove('rotate', 'move-right');
      setLoading(false);
    }, 4000); // Simulate loading for 2 seconds
  };

  const handleShowCheckCartMessage = () => {
    setShowCheckCartMessage(true);
    setTimeout(() => {
      setShowCheckCartMessage(false);
    }, 5000);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const removeProduct = (vegetable, weight) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex(item => item.vegetable.name === vegetable.name && item.weight === weight);
    if (index !== -1) {
      updatedCart.splice(index, 1);
      setCart(updatedCart);
    }
  };

  const handleCloseCheckout = () => {
    setShowCheckout(false);
  };

  const filteredVegetables = vegetables.filter(
    (veg) =>
      (selectedCategory === 'All' || veg.category === selectedCategory) &&
      veg.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <>
      <Nav />
      {/* <div style={{ color: "darkgreen", fontSize: "larger", marginTop: "60px" }}>
        <b>
          <TextSlider text="**At Farm Bounty, you can buy fresh vegetables, meat, and milk directly from farmers, ensuring the highest quality and supporting local agriculture. Enjoy farm-fresh produce delivered straight to your doorstep.**" />
        </b> */}
      {/* </div> */}
      
      <div className="app">
        {showCheckCartMessage && (
          <div className="check-cart-message"> <i className="fas fa-exclamation-circle alert-icon"></i>Check Your Cart</div>
        )}
        <div className="trolley" onClick={handleTrolleyClick} onMouseEnter={handleShowCheckCartMessage}>
          <img src={trolleyIcon} alt="Trolley" />
        </div>
        <div className='search-category'>
  

        <input
          type="text"
          placeholder="Search for a vegetable..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-bar"
          />
        <select value={selectedCategory} onChange={handleCategoryChange} className="category-select">
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <div>
        <h1 style={{marginLeft:"350px",color:"green"}}>Buy Fresh-Eat Fresh!</h1>
        <hr className='card-hr'></hr>
      </div>
        
          </div>

        <div className="ser">
          <div className="vegetable-cards2">
            {filteredVegetables.map((vegetable, index) => (
              <Card key={index} vegetable={vegetable} addProduct={addProduct} removeProduct={removeProduct} />
            ))}
          </div>
          <div className="vegetable-cards">
            {rows.map((row, rowIndex) => (
              <div className="row" key={rowIndex}>
                {row.map((vegetable, cardIndex) => (
                  <Card key={cardIndex} vegetable={vegetable} addProduct={addProduct} removeProduct={removeProduct} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {showCheckout && (
          <div className="checkout-overlay">
            <div className="checkout-box">
              <button className="close-btn" onClick={handleCloseCheckout}>X</button>
              {loading ? (
                <div className="loading-animation">
                  <img src={trolleyIcon} alt="Loading" className="rotate" />
                  <div className="loading-text">Cultivating Your Order...</div>
                </div>
              ) : (
                <Checkout cart={cart} clearCart={clearCart} />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
