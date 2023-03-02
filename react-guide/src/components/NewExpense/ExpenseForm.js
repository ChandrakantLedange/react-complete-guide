import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (e) => {
    console.log(e.target.value);
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    console.log(e.target.value);
    setEnteredTitle(e.target.value);
  };
  const dateChangeHandler = (e) => {
    console.log(e.target.value);
    setEnteredTitle(e.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>enteredTitle</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submir">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
