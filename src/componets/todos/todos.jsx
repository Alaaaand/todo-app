import React, { useState } from "react";
import "./todos.css";
    
export const Todos = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };
    setList([...list, newTodo]);
    setInput("");
  };
  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };
  return (
    <>
      <div className="head">
        {" "}
        <div id="myDIV" className="header">
          <h2 style={{ margin: "5px" }}>My To Do List</h2>
          <input
            type="text"
            id="myInput"
            placeholder="Title..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <span className="addBtn" onClick={() => addTodo(input)}>
            Add
          </span>
        </div>
        <ul id="myUL">
          {list.map((todo) => {
            return (
              <>
                <li key={todo.id}>
                  {todo.todo}
                  <button className="close" onClick={() => deleteTodo(todo.id)}>
                    &times;
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};
