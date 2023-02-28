import React from "react";
import "./ExpenseItem.css";

export default function ExpenseItem() {
  return (
    <div>
      <div className="expense-item">28 march</div>
      <div className="expense-item__description">
        <h2>Bike Insurance </h2>
      </div>
      <div className="expense-item__price">2456</div>
    </div>
  );
}
