import React from "react";
function TodoItem({ task, deleteTask, updateTask }) {
  return (
    <div className="todo-item">
      <h1>
        {task.text}
        <button onClick={() => deleteTask(task.id)}>delete</button>
        <button onClick={() => (updateTask = updateTask)}>Update</button>
      </h1>
    </div>
  );
}
export default TodoItem;
