// TodoList.js
import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import "./TodoItem.css";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function editTask(id, newText) {
    setTasks(
      tasks.map(task => (task.id === id ? { ...task, text: newText } : task))
    );
  }

  function filterTasks() {
    return showCompleted ? tasks : tasks.filter(task => !task.completed);
  }
  function clear(id) {
    setTasks(tasks.filter(task => ""));
  }

  return (
    <div className="todo-list">
      <br />
      <strong>Name:</strong>
      <input value={text} onChange={e => setText(e.target.value)} />
      <br />
      <br />
      <button onClick={() => addTask(text)}>Add</button>
      <button onClick={() => clear()}>Clear</button>
      <br />
      <br />

      {filterTasks().map(task => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default TodoList;
