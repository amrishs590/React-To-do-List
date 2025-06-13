import React from "react";
import "./TodoList.css";
import { useState } from "react";
const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  function handlechange(e) {
    setTask(e.target.value);
  }
  function addTask() {
    if (task === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  }
  function DeleteTask(index) {
    const newtask = tasks.filter((_, i) => {
      return i !== index;
    });
    setTasks(newtask);
  }
  function TaskStatus(index) {
    const updatedTasks = tasks.map((item, i) => {
      if (i === index) {
        return { ...item, completed: !item.completed };
      }
      return item;
    }); 
    setTasks(updatedTasks);
  }

  return (
    <>
      <div className="todo-wrapper">
        <input
          type="text"
          value={task}
          onChange={handlechange}
          placeholder="Enter a task"
        />
        <button className="addbtn" onClick={addTask}>
          Add Task
        </button>
        <ul>
          {tasks.map((item, index) => {
            return (
              <li key={index}>
                {item.text}
                <button className="statusbtn" onClick={() => TaskStatus(index)}>
                  {item.completed ? "✅" : "❌"}
                </button>
                <button onClick={() => DeleteTask(index)}>Delete Task</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
