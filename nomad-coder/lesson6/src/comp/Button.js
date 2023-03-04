import { useState } from "react";

function Button() {
  const [text, setText] = useState("");
  const change = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <input
        type={"text"}
        placeholder={"Write your button name"}
        onChange={change}
      ></input>
      <br />
      <button>{text}</button>
    </>
  );
}

export default Button;
