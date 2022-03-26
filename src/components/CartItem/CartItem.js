import React from "react";
import "./CartItem.css";

// Cart Item
const CartItem = ({ item }) => {
  const { img, name, quantity } = item;
  return (
    <div className="cartItem">
      <img src={img} alt="" />
      <p>{name.length > 14 ? name.slice(0, 14) : name}</p>
      <p className="quantity">{quantity}</p>
      <button className="itemDeleteBtn">
        <p>X</p>
      </button>
    </div>
  );
};

export default CartItem;
