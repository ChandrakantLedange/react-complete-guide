import React, { useState, useRef } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

export default function AddUser(props) {
  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const addUserHandler = (event) => {
    event.preventDefault();
    const inputName = nameInputRef.current.value;
    const inputAge = nameInputRef.current.value;
    console.log("clicked");
    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      return setError({
        title: "Invalid input",
        message: "Enter valid input (should not be empty)",
      });
    }
    if (inputAge < 1) {
      return setError({
        title: "Invalid age",
        message: "Enter valid age (should not <1)",
      });
    }
    props.onAddUser(inputName, inputAge);
    // setEnteredUserName("");
    // setEnteredAge("");
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };
  // const userNameChangeHandler = (event) => {
  //   setEnteredUserName(event.target.value);
  // };
  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };
  const displayErrorModal = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={displayErrorModal}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            // onChange={userNameChangeHandler}
            // value={enteredUserName}
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            // onChange={ageChangeHandler}
            // value={enteredAge}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
          {/* <button type="submit"></button> */}
        </form>
      </Card>
    </Wrapper>
  );
}
