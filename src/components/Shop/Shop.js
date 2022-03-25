import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "./../Product/Product";
const Shop = () => {
  // Setting products
  const [products, setProducts] = useState();

  //   Getting Products
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //   console.log(products);

  return (
    <div className="shopContainer row container px-0">
      {/* Products container */}
      <div className="productContainer col-lg-10">
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
      {/* Cart Container */}
      <div className="cartContainer col-lg-3">
        <h1>Cart</h1>
      </div>
    </div>
  );
};

export default Shop;
