import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Product() {
  const [state, setstate] = useState<any>({});
  const query = useQuery();
  useEffect(() => {
    fetch("https://backendapi.turing.com/products/" + query.get("id"))
      .then((response) => response.json())
      .then((data) => setstate(data));
    return () => {
      setstate({});
    };
  }, []);

  return (
    <>
      <p>{state.name}</p>
      <Link to="/">go back</Link>
    </>
  );
}

export default Product;
