import React, { useState } from 'react';

const Card = ({ vegetable, addProduct,removeProduct,count }) => {
  const [selectedWeight, setSelectedWeight] = useState('1kg');
  const [itemCount, setItemCount] = useState(0);

  const handleWeightChange = (e) => {
    setSelectedWeight(e.target.value);
  };

  const handleAddClick = () => {
    if (selectedWeight) {
      addProduct(vegetable, selectedWeight);
      setItemCount(itemCount + 1);
    } else {
      alert('Please select a weight');
    }
  };
  const handleRemoveClick = () => {
    if (itemCount > 0) {
      removeProduct(vegetable, selectedWeight);
      setItemCount(itemCount - 1);
    }
  };

  const calculatePrice = (weight) => {
    const weights = {
      '100g': 0.1,
      '250g': 0.25,
      '500g': 0.5,
      '1kg': 1,
    };
    const selectedWeightValue = weights[weight];
    const actualPricePerKg = vegetable.actualPrice;
    const offerPricePerKg = vegetable.offerPrice;
    return {
      actualPrice: (actualPricePerKg * selectedWeightValue).toFixed(2),
      offerPrice: (offerPricePerKg * selectedWeightValue).toFixed(2),
    };
  };

  const { actualPrice, offerPrice } = calculatePrice(selectedWeight);
  return (
    <div className="card-veg">
      <div className="offer">{vegetable.offerPercentage}% OFF</div>
      <img src={vegetable.image} alt={vegetable.name} className="image-veg" />
      <h2 style={{color:"brown",marginTop:"15px"}}>{vegetable.name}</h2>
      <div className="details">
        <select style={{backgroundColor:"yellow",color:"",fontWeight:"bold"}} value={selectedWeight} onChange={handleWeightChange}>
          <option value="">Select weight</option>
          <option value="100g">100g</option>
          <option value="250g">250g</option>
          <option value="500g">500g</option>
          <option value="1kg">1kg</option>
        </select>
        <div className="price">
          <span className="actual-price">₹{actualPrice}</span>
          <span className="offer-price">₹{offerPrice}</span>
        </div>
        <div>

        <button style={{backgroundColor:"red",color:"black",fontWeight:"bold"}} onClick={handleRemoveClick} disabled={itemCount === 0}>
            Remove
          </button>
        <button onClick={handleAddClick} style={{backgroundColor:"green",marginLeft:"4px",fontWeight:"bold"}}>
          Add {itemCount > 0 && `(${itemCount})`}
        </button>
          </div>
      </div>
    </div>
  );
};

export default Card;
