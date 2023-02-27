import { useState } from "react";

function MinutesToHours() {
  const [minutes, setMinutes] = useState(0);
  const [flipped, setFlipped] = useState(true);
  const onFlip = () => {
    reset();
    setFlipped((current) => !current);
  };
  const onChange = (e) => {
    setMinutes(e.target.value);
  };
  const reset = () => {
    setMinutes(0);
  };
  return (
    <>
      <div className="minutes">
        <label htmlFor="minutes">Minutes</label>
        <input
          value={flipped ? minutes * 60 : minutes}
          id="minutes"
          placeholder="Minutes"
          type="number"
          onChange={onChange}
          disabled={flipped}
        ></input>
      </div>
      <div className="hours">
        <label htmlFor="hours">Hours</label>
        <input
          type={"number"}
          id="hours"
          placeholder="Hours"
          value={flipped ? minutes : Math.round(minutes / 60)}
          disabled={!flipped}
          onChange={onChange}
        ></input>
      </div>
      <div className="btn">
        <button onClick={reset}>Reset</button>
        <button onClick={onFlip}>
          {flipped ? "Hours to Minutes" : "Minutes to Hours"}
        </button>
      </div>
    </>
  );
}

function KmToMiles() {
  const [distance, setDistance] = useState(0);
  const [flip, setFlipped] = useState(true);
  const onChange = (e) => {
    setDistance(e.target.value);
  };
  const reset = () => {
    setDistance(0);
  };
  const invert = () => {
    setFlipped(!flip);
    console.log(flip);
  };
  return (
    <>
      <div className="km">
        <span>Km</span>
        <input
          type={"number"}
          onChange={onChange}
          value={flip ? Math.round(distance * 1.60934) : distance}
          disabled={flip}
        ></input>
      </div>
      <div className="mile">
        <span>Mile</span>
        <input
          type={"number"}
          value={flip ? distance : Math.round(distance * 0.621371)}
          disabled={!flip}
          onChange={onChange}
        ></input>
      </div>
      <div className="btn">
        <button className="reset" onClick={reset}>
          Reset
        </button>
        <button className="invert" onClick={invert}>
          {flip ? "Mile to Km" : "Km to Mile"}
        </button>
      </div>
    </>
  );
}
function App() {
  const [index, setIndex] = useState("2");
  const onChange = (e) => {
    setIndex(e.target.value);
  };
  return (
    <>
      <div className="title">
        <h1>Super Converter</h1>
      </div>
      <select onChange={onChange}>
        <option value={"0"}>Minutes to Hours</option>
        <option value={"1"}>Km to Mile</option>
        <option value={"2"}>Select Converter</option>
      </select>
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToMiles /> : null}
    </>
  );
}

export default App;
