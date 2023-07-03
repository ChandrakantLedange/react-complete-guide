import React, { useRef, useState } from "react";
const SimpleInput = (props) => {
  const inputNameRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameisValid, setEnteredNameIsvalid] = useState(true);
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim() === "") {
      setEnteredNameIsvalid(false);
    }
    console.log(enteredName);
    const enteredValue = inputNameRef.current.value;
    console.log(enteredValue);
    // inputNameRef.current.value = "";//Not ideal, don't manipulate the dom
    setEnteredName("");
  };
  const nameInputClasses = enteredNameisValid
    ? "form-control"
    : "form-control invalid";
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
        />
      </div>
      {!enteredNameisValid ? (
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
