import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "./../Product/Product";
import Cart from "../Cart/Cart";
const Shop = () => {
  // Setting products
  const [products, setProducts] = useState([]);

  //   Setting Cart items
  const [cart, setCart] = useState([]);
  console.log(cart);
  //   Getting Products
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //   Handle add to cart BUTTON
  const addToCart = (selectedProduct) => {
    let newCart = [];

    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (exists) {
      const rest = cart.filter((product) => product.id !== exists.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    } else {
      selectedProduct["quantity"] = 1;
      newCart = [...cart, selectedProduct];
    }

    setCart(newCart);
  };

  return (
    <div className="shopContainer ">
      {/* Cart Container */}
      <div className="cartContainer">
        <Cart cart={cart}></Cart>
      </div>
      {/* Products container */}
      <div className="productContainer">
        {products.map((product) => (
          <Product
            key={product.id}
            addToCart={addToCart}
            product={product}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Shop;
