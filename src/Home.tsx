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
