import "./App.css";
import { useState, memo } from "react";
import PropTypes from "prop-types";

function Btn({ text, onClick }) {
  return (
    <button
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Btn.propTypes = {
  text: PropTypes.string,
};

const MemorizedBtn = memo(Btn);
function App() {
  const [text, setText] = useState("Save Change");
  const changeText = () => {
    console.log();
    if (text === "Save Change") {
      setText("Convert Change");
    } else {
      setText("Save Change");
    }
  };
  return (
    <>
      <MemorizedBtn text={text} onClick={changeText} />
      <MemorizedBtn text={"test"} />
    </>
  );
}

export default App;
