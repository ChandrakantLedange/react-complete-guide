import React from "react";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  return (
    <div>
      <div className="expense-item">{props.date.toString()}</div>
      <div className="expense-item__description">
        <h2>{props.title} </h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>
    </div>
  );
}
