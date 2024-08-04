import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const handleAddToCart = product => {
    addToCart(product);
  };

  const handleSearchInputChange = event => {
    setSearchQuery(event.target.value);
  };

  // Filter products based on the search query
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="Home">
      <div className="nav">
        <h2 id="Title">
          Products :
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            id="search"
          />
        </h2>
        <div>
          <Link to="/cart" id="view">
            View Cart 🛒
          </Link>
        </div>
      </div>

      <div id="card1">
        {filteredProducts.map(product => (
          <div key={product.id} id="card2">
            <img src={product.image} alt={product.title} id="img" />
            <h3 id="title">{product.title}</h3>
            <p id="price"> Price: ${product.price}💵</p>
            <button onClick={() => handleAddToCart(product)} id="btn">
              Add to Cart
            </button>
            <Link to={`/product/${product.id}`} id="link">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
