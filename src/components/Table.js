import React from "react";

const Table = (props) => {
  console.log(props, "guhgihg");
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {props.allTodos.map((todo, index) => {
          return (
            <li key={index}>
              {todo.value}-{todo.task}
              <span style={{ margin: "0px 15px" }}>
                <button
                  type="button"
                  class="btn btn-danger my-10"
                  onClick={() => props.handleDelete(index)}
                >
                  Delete
                </button>
              </span>
              <button
                type="button"
                class="btn btn-success"
                onClick={() => props.handleComplete(index)}
                disabled={todo.task == "completed"}
              >
                Completed{" "}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Table;
