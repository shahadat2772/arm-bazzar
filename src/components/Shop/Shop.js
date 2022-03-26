import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "./../Product/Product";
import Cart from "../Cart/Cart";
import Qna from "../QNA/Qna";
const Shop = () => {
  // Setting products
  const [products, setProducts] = useState([]);

  //   Setting Cart items
  const [cart, setCart] = useState([]);
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
    if (cart.length < 4 || exists) {
      if (exists) {
        const rest = cart.filter((product) => product.id !== exists.id);
        exists.quantity = exists.quantity + 1;
        newCart = [...rest, exists];
      } else {
        selectedProduct["quantity"] = 1;
        newCart = [...cart, selectedProduct];
      }
      setCart(newCart);
    } else {
      alert("Slow down cow boy, four item at a time!");
    }
  };

  //   Random Number Generator
  const randomID = () => {
    return Math.floor(Math.random() * (12 - 1 + 1) + 1);
  };

  // Handle Random one BTN
  const getRandomOne = () => {
    if (cart.length !== 0) {
      let id = randomID();
      let randomItem = cart.find((product) => product.id === id);
      if (randomItem) {
        setCart([randomItem]);
      } else {
        getRandomOne();
      }
    } else {
      alert("Hey cow boy, you must select item to get a random one!");
    }
  };

  //   Handle Choose Again BTN
  const chooseAgain = () => {
    setCart([]);
  };

  return (
    <div className="shopContainer ">
      {/* Cart Container */}
      <div className="cartContainer">
        <Cart
          chooseAgain={chooseAgain}
          getRandomOne={getRandomOne}
          cart={cart}
        ></Cart>
      </div>
      {/* Products container */}
      <div>
        <div className="productContainer">
          {products.map((product) => (
            <Product
              key={product.id}
              addToCart={addToCart}
              product={product}
            ></Product>
          ))}
        </div>
        {/* QNA Compo */}
        <Qna></Qna>
      </div>
    </div>
  );
};

export default Shop;
