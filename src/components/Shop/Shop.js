import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "./../Product/Product";
import Cart from "../Cart/Cart";
const Shop = () => {
  // Setting products
  const [products, setProducts] = useState([]);

  //   Getting Products
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //   console.log(products);

  return (
    <div className="shopContainer ">
      {/* Cart Container */}
      <div className="cartContainer">
        <Cart></Cart>
      </div>
      {/* Products container */}
      <div className="productContainer">
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Shop;
