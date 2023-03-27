import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

export default function AddUser() {
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log("clicked");
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (years)</label>
        <input id="age" type="number" />
        <Button>Add User</Button>
        {/* <button type="submit"></button> */}
      </form>
    </Card>
  );
}
