import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';
import '../Components/Card.css';

const Checkout = ({ cart, clearCart }) => {
  const checkoutRef = useRef(null);

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const weights = {
        '100g': 0.1,
        '250g': 0.25,
        '500g': 0.5,
        '1kg': 1,
      };
      const weightValue = weights[item.weight];
      const itemTotal = item.vegetable.offerPrice * weightValue;
      return total + itemTotal;
    }, 0).toFixed(2);
  };

  const handleDownloadBill = () => {
    const doc = new jsPDF();
    doc.text('Checkout Details', 20, 20);
    cart.forEach((item, index) => {
      const weights = {
        '100g': 0.1,
        '250g': 0.25,
        '500g': 0.5,
        '1kg': 1,
      };
      const weightValue = weights[item.weight];
      const itemTotal = (item.vegetable.offerPrice * weightValue).toFixed(2);
      doc.text(
        `${index + 1}. ${item.vegetable.name} - ${item.weight} - ₹${itemTotal}`,
        20,
        30 + index * 10
      );
    });
    doc.text(`Total: ₹${calculateTotal()}`, 20, 30 + cart.length * 10);
    doc.save('bill.pdf');
  };

  return (
    <div className="checkout" ref={checkoutRef}>
      {cart.length === 0 ? (
        <div className="no-items">No items added</div>
      ) : (
        <>
          <div className="checkout-items">
            {cart.map((item, index) => (
              <div key={index} className="checkout-item">
                <div className="item-name">{item.vegetable.name}</div>
                <div className="item-weight">{item.weight}</div>
                <div className="item-price">
                  ₹{(item.vegetable.offerPrice * { '100g': 0.1, '250g': 0.25, '500g': 0.5, '1kg': 1 }[item.weight]).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="checkout-total">
            Total: <h1 style={{ color: 'darkgreen' }}> ₹{calculateTotal()}</h1>
          </div>
          <div className="checkout-actions">
            <button className="clear-button" onClick={clearCart}>Clear</button>
            <button className="buy-button-check" onClick={handleDownloadBill}>Buy</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
