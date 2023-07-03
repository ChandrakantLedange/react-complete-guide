import React, { useRef, useState } from "react";
const SimpleInput = (props) => {
  const inputNameRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameisValid, setEnteredNameIsvalid] = useState(false);
  const [enteredNameisTouched, setEnteredNameIsTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const nameInputBlurHandler = () => {
    setEnteredNameIsTouched(true);
    if (enteredName.trim() === "") {
      setEnteredNameIsvalid(true);
    }
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameIsTouched(true);
    if (enteredName.trim() === "") {
      setEnteredNameIsvalid(true);
    }
    console.log(enteredName);
    const enteredValue = inputNameRef.current.value;
    console.log(enteredValue);
    // inputNameRef.current.value = "";//Not ideal, don't manipulate the dom
    setEnteredName("");
  };
  const nameInputIsInvalid = enteredNameisValid && enteredNameisTouched;
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={inputNameRef}
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
      </div>
      {nameInputIsInvalid ? (
        <p className="error-text">Name must not be empty</p>
      ) : (
        ""
      )}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
