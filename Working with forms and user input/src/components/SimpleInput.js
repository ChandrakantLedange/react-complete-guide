import React, { useRef, useState } from "react";
const SimpleInput = (props) => {
  const inputNameRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
    const enteredValue = inputNameRef.current.value;
    console.log(enteredValue);
    // inputNameRef.current.value = "";//Not ideal, don't manipulate the dom
    setEnteredName("");
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={inputNameRef}
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
