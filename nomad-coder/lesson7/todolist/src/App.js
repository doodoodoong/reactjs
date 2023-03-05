import "./App.css";
import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
    setToDoList((current) => [toDo, ...current]);
    setToDo("");
  };
  const onChange = (e) => {
    setToDo(e.target.value);
  };

  return (
    <>
      <div>
        <h1>My To Do({toDoList.length})</h1>
      </div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          placeholder="Wrtie your Todo"
          value={toDo}
        ></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDoList.map((i, index) => {
          return <li key={index}>{i}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
