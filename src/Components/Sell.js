import React, { useState } from 'react';
import './Sell.css';
import Nav from '../Components/Nav.js';

const Sell = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({ name: '', category: 'vegetables and fruits', image: null, quantity: '', price: '', description: '' });
  const [filter, setFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [notifications, setNotifications] = useState([]);

  const addProduct = () => {
    setProducts([...products, product]);
    setProduct({ name: '', category: 'vegetables and fruits', image: null, quantity: '', price: '', description: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    setProduct({ ...product, image: URL.createObjectURL(e.target.files[0]) });
  };

  const sellProduct = () => {
    setNotifications([...notifications, 'Our team will contact you shortly to pick up your product.']);
  };

  const removeProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const filteredProducts = products.filter((p) => p.category.includes(filter) && p.name.includes(searchTerm));

  return (
    <>
    <Nav/>
    <h1 style={{textAlign:"center",color:"brown"}}>SELL YOUR PRODUCT</h1>
    <div className="sell-container">
      <div className="sell-add-product">
        <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} />
        <select name="category" value={product.category} onChange={handleChange}>
          <option value="vegetables and fruits">Vegetables and Fruits</option>
          <option value="milk">Milk</option>
          <option value="grains">Grains</option>
          <option value="other">Other</option>
        </select>
        <br/>
        <br/>
        
        <input type="file" name="image" onChange={handleImageChange} />
        <input type="number" name="quantity" placeholder="Quantity" value={product.quantity} onChange={handleChange} />
        <p style={{color:"red",fontSize:"15px"}}>*Weights in kgs. If it is milk, then specify it in litres. Approx quantity is okay.</p>
        <input type="number" name="price" placeholder="Expected Price" value={product.price} onChange={handleChange} />
        <p style={{color:"red",fontSize:"15px"}}>*Final price determined by comparing market price and your expected price with your concern.</p>
        <textarea name="description" placeholder="Description" value={product.description} onChange={handleChange}></textarea>
        <button onClick={addProduct}>Add Product</button>
      </div>
      <div className="sell-filter-search">
        <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="">All Categories</option>
          <option value="vegetables and fruits">Vegetables and Fruits</option>
          <option value="milk">Milk</option>
          <option value="grains">Grains</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="sell-product-list">
        {filteredProducts.map((p, index) => (
          <div key={index} className="sell-product-card">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <p>Quantity: {p.quantity}</p>
            <p>Price: ${p.price}</p>
            <button onClick={sellProduct}>Sell</button>
            <button onClick={() => removeProduct(index)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="sell-notifications">
        {notifications.map((note, index) => (
          <div key={index} className="sell-notification">
            {note}
          </div>
        ))}
      </div>
    </div>
        </>
  );
};

export default Sell;
