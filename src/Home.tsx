import React, { useEffect, useState } from "react";
import logo from "./react.svg";

import "./Home.css";
import { response } from "express";
import { Link } from "react-router-dom";

function Home() {
  const [state, setstate] = useState([]);
  useEffect(() => {
    fetch(
      "https://backendapi.turing.com/products?page=1&limit=20&description_length=4"
    )
      .then((response) => response.json())
      .then((data) => setstate(data.rows));
    return () => {
      setstate([]);
    };
  }, []);
  return (
    <div className="Home">
      {state && //if state exists AND do loop on state then return UI ELEMENTS
        state.map((product) => {
          //
          return (
            <div key={product.product_id}>
              product <p>{product.name}</p>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <p>{product.discounted_price}</p>
              <img
                alt={product.thumbnail}
                src={`./images/${product.thumbnail}`}
              />
              <Link to={`/product?id=${product.product_id}`}>buy now</Link>
            </div>
          );
        })}
    </div>
  );
}

export default Home;

// {
//   "count": 101,
//   "rows": [
//     {
//       "product_id": 3,
//       "name": "Coat of Arms",
//       "description": "Ther...",
//       "price": "14.50",
//       "discounted_price": "0.00",
//       "thumbnail": "coat-of-arms-thumbnail.gif"
//     },
//     {
//       "product_id": 4,
//       "name": "Gallic Cock",
//       "description": "This...",
//       "price": "18.99",
//       "discounted_price": "16.99",
//       "thumbnail": "gallic-cock-thumbnail.gif"
//     }
//   ]
// }
// https://backendapi.turing.com/products?page=2&limit=2&description_length=4
