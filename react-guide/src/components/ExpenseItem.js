import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  return (
    <div>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{props.title} </h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>
    </div>
  );
}
