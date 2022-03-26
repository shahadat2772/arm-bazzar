import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = ({ product, addToCart }) => {
  const { img, price, action, name } = product;
  //   console.log(product);
  return (
    <div className="productCard col-3">
      <img src={img} alt="" />
      <div className="cardInfo">
        <h3>{name}</h3>
        <h4>Price: ${price}</h4>
        <p className="fs-5">Action: {action}</p>
      </div>
      <button onClick={() => addToCart(product)} className="addBtn">
        <p>
          Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </p>
      </button>
    </div>
  );
};

export default Product;
