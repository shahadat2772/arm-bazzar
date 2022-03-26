import React from "react";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);

  return (
    <div className="cart">
      <h3 className="text-center">Added Items</h3>
      {cart.map((item) => (
        <CartItem key={item.id} item={item}></CartItem>
      ))}
      <div className="CartButtons">
        <button className="getRandomBtn">
          <p>Get Random One</p>
        </button>
        <button className="chooseAgainBtn">
          <p>Choose Again</p>
        </button>
      </div>
    </div>
  );
};

export default Cart;
