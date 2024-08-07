import { useState } from "react";
import "./App.css";
import Table from "./components/Table";
function App() {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("completed");
  const [allTodos, setAllTodos] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
    console.log(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = () => {
    const toDo = { value: task, task: status };
    console.log(toDo, "cbhscbshd");
    setAllTodos([...allTodos, toDo]);
    setTask(" ");
  };

  const handleDelete = (index) => {
    let arr = [...allTodos];
    arr = arr.filter((item, i) => i != index);
    console.log(arr, "fsvsvsdv");
    setAllTodos(arr);
  };
  const handleComplete = (index) => {
    let arr = [...allTodos];
    arr[index].task = "completed";
    console.log(arr, "udhjkdhhd");
    setAllTodos(arr);
  };
  console.log(allTodos, "hello");
  return (
    <div className="App">
      <h1>My Todos</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <input
              type="text"
              placeholder="Enter text here"
              value={task}
              onChange={handleChange}
            />
          </div>
          <div className="todo-input-item">
            <select value={status} onChange={handleStatusChange}>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
          <div className="todo-input-item">
            <button type="button" className="primaryBtn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
      <Table
        allTodos={allTodos}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
      />
    </div>
  );
}

export default App;
