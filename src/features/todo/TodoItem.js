import React from "react";
import "./TodoItem.css";

const TodoItem = ({ todo }) => {
  return (
    <li className={todo.completed ? "job_done" : ""}>
      {todo.title}
    </li>
  );
};

export default TodoItem;
