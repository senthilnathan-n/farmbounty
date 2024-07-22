import React from 'react';
import '../Components/Todaysoffer.css'; // Import custom CSS for additional styling if needed

// Import local images
import im1 from '../Images/c1.jpeg'
import im2 from '../Images/c2.jpeg'
import im3 from '../Images/c3.jpeg'
import im4 from '../Images/c1.jpeg'
import im5 from '../Images/c2.jpeg'
import im6 from '../Images/c3.jpeg'
const Today = () => {
  const offers = [
    { img: im1, title: 'Offer 1', description: 'Description for Offer 1' },
    { img: im2, title: 'Offer 2', description: 'Description for Offer 2' },
    { img: im3, title: 'Offer 3', description: 'Description for Offer 3' },
    { img: im4, title: 'Offer 4', description: 'Description for Offer 4' },
    { img: im5, title: 'Offer 5', description: 'Description for Offer 5' },
    { img: im6, title: 'Offer 6', description: 'Description for Offer 6' }
  ];

  return (
    <div className="todays-offers">
      <h2 style={{color:'brown'}}>Today's Offers</h2>
      <hr />
      <div className="offers-container">
        {offers.map((offer, index) => (
          <div key={index} className="card">
            <img src={offer.img} alt={offer.title} />
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Today;
