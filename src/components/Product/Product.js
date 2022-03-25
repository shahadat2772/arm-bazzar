import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  const { img, price, action, name } = product;
  console.log(product);
  return (
    <div className="productCard col-3">
      <img src={img} alt="" />
      <div className="cardInfo">
        <h3>{name}</h3>
        <h4>Price: ${price}</h4>
        <p className="fs-5">Action: {action}</p>
      </div>
      <button className="addBtn">
        <p>Add to Cart</p>
      </button>
    </div>
  );
};

export default Product;
