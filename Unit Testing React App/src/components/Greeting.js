import { useState } from "react";

function Greeting() {
  const [changeText, setChangeText] = useState(false);
  const changeTextHandler = () => {
    setChangeText(true);
  };
  return (
    <>
      {!changeText && <h1>Greeting from Greeting component</h1>}
      {changeText && <h1>text changed!</h1>}
      <button onClick={changeTextHandler}>Change Text</button>
    </>
  );
}

export default Greeting;
