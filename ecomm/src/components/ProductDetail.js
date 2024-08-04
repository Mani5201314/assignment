// src/components/ProductDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./producy.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [id]);

  return (
    <div id="product">
      <h2 id="productname">Product Details</h2>
      <div id="pad">
        <img id="productimg" src={product.image} alt={product.title} />
        <h3 id="producttitke">{product.title}</h3>
        <p>${product.price}</p>
        <p>{product.description}</p>
        <Link id="productback" to="/">
          Back
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
