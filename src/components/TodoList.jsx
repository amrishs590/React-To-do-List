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
    setTasks([...tasks, { text: task, completed: false, edit: false }]);
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

  function EditTask(index) {
    const newtask = tasks.map((item, i) => {
      if (i == index) return { ...item, edit: true };
      return item;
    });
    setTasks(newtask);
  }

  function SaveTask(index, nt) {
    const newtask = tasks.map((item, i) => {
      if (i == index) return { ...item, text: nt, edit: false };
      return item;
    });
    setTasks(newtask);
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
                {item.edit ? (
                  <>
                    <input
                      type="text"
                      defaultValue={item.text}
                      onChange={(e) => (item.text = e.target.value)}
                    />
                    <button onClick={() => SaveTask(index, item.text)}>
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    {item.text}
                    <button
                      className="statusbtn"
                      onClick={() => TaskStatus(index)}
                    >
                      {item.completed ? "✅" : "❌"}
                    </button>
                    <button
                      style={{ backgroundColor: "blue" }}
                      onClick={() => EditTask(index)}
                    >
                      Edit
                    </button>

                    <button onClick={() => DeleteTask(index)}>
                      Delete Task
                    </button>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
