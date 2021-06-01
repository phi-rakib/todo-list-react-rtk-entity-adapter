import React from "react";
import DeleteTodo from "./DeleteTodo";
import CompleteTodo from "./CompleteTodo";
import "./TodoItem.css";

const TodoItem = ({ todo }) => {
  const { id } = todo;
  return (
    <li className={todo.completed ? "job_done" : ""}>
      <CompleteTodo todo={todo} />
      {todo.title}
      <DeleteTodo id={id} />
    </li>
  );
};

export default TodoItem;
