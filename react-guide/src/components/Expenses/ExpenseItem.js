import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const changeTitleHandler = () => {
    console.log("Title Changed!!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">{props.title}</div>
      <div className="expense-item__price">{props.amount}</div>
      <button onClick={changeTitleHandler}>Change Title</button>
    </Card>
  );
};
export default ExpenseItem;
