import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Header({ handleOnChangeSear, val, cart }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="hdr">
      <div>
        <h1>
          Med<span>Shop</span>
        </h1>
      </div>
      <div className="cart-container">
        <input
          type="text"
          value={val}
          onChange={handleOnChangeSear}
          placeholder="Search ..."
        />
        <button onClick={toggleCart}>
          <h2>
            <FaShoppingCart />
            <span className="cart">{cart.length}</span>
          </h2>
        </button>
        {isCartOpen && (
          <div className="cart-modal">
            <h3>Cart Items</h3>
            {cart.length > 0 ? (
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>{item.title} || Price :${item.price}</li>
                ))}
              </ul>
            ) : (
              <p>Cart is empty</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
