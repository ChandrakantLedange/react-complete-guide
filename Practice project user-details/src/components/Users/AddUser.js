import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

export default function AddUser() {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log("clicked");
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (enteredAge < 1) {
      return;
    }
    console.log(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };
  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          onChange={userNameChangeHandler}
          value={enteredUserName}
          type="text"
        />
        <label htmlFor="age">Age (years)</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <Button type="submit">Add User</Button>
        {/* <button type="submit"></button> */}
      </form>
    </Card>
  );
}
