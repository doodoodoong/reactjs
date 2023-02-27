import { useState } from "react";

function App() {
  const [minutes, setMinutes] = useState(0);
  const onChange = (e) => {
    setMinutes(e.target.value);
  };
  const reset = () => {
    setMinutes(0);
  };
  return (
    <>
      <div className="title">
        <h1>Super Converter</h1>
      </div>
      <div className="minutes">
        <label htmlFor="minutes">Minutes</label>
        <input
          value={minutes}
          id="minutes"
          placeholder="Minutes"
          type="number"
          onChange={onChange}
        ></input>
      </div>
      <div className="hours">
        <h2>You want to convert {minutes} </h2>
        <label htmlFor="hours">Hours</label>
        <input
          type={"number"}
          id="hours"
          placeholder="Hours"
          value={Math.round(minutes / 60)}
          disabled
        ></input>
      </div>
      <div className="btn">
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default App;
