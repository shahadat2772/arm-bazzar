import React from "react";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = ({ cart, getRandomOne, chooseAgain }) => {
  console.log(cart);

  return (
    <div className="cart">
      <h3 className="text-center">Added Items</h3>
      {/* Items Container */}
      <div className="itemsContainer">
        {cart.map((item) => (
          <CartItem key={item.id} item={item}></CartItem>
        ))}
      </div>
      {/* Cart Buttons */}
      <div className="CartButtons">
        <button
          id="getRandomOneBtn"
          onClick={() => getRandomOne()}
          className="getRandomBtn"
        >
          <p>Get Random One</p>
        </button>
        <button onClick={() => chooseAgain()} className="chooseAgainBtn">
          <p>Choose Again</p>
        </button>
      </div>
    </div>
  );
};

export default Cart;
