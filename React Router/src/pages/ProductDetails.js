import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const params = useParams();
  return (
    <>
      <h1>ProductDetails</h1>
      <p>{params.productId}</p>
    </>
  );
}
