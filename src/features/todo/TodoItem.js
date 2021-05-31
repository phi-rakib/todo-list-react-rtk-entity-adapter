import React from "react";
import DeleteTodo from "./DeleteTodo";
import "./TodoItem.css";

const TodoItem = ({ todo }) => {
  const { id } = todo;
  return (
    <li className={todo.completed ? "job_done" : ""}>
      {todo.title}
      <DeleteTodo id={id} />
    </li>
  );
};

export default TodoItem;
