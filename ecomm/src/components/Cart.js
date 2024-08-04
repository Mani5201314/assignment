// src/components/Cart.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./cart.css";
const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div id="caet">
      <h2 className="shop">Shopping Cart</h2>
      <Link id="cartlink" to="/">
        Continue Shopping
      </Link>
      <ul id="cardcart">
        {cart.map(item => (
          <li key={item.id} id="li1">
            <img src={item.image} alt="" style={{ width: "100px" }} /> <br />
            <p id="par">{item.title} </p>
            <p> ${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
