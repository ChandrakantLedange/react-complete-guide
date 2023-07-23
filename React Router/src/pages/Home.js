import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  function handleNavigation() {
    navigate("/products");
  }
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        <Link to="/products">Go to products</Link>
      </p>
      <button onClick={handleNavigation}>Products navigation</button>
    </div>
  );
}
