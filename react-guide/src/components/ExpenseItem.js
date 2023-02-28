import React from "react";
import "./ExpenseItem.css";

export default function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Bike Insurance";
  const expenseAmount = 2466.6;
  return (
    <div>
      <div className="expense-item">{expenseDate.toString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle} </h2>
      </div>
      <div className="expense-item__price">{expenseAmount}</div>
    </div>
  );
}
