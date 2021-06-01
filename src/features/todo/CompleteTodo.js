import React from "react";
import { useDispatch } from "react-redux";
import { todoComplete } from "./todoSlice";

const CompleteTodo = ({ todo }) => {
  const { completed } = todo;
  const dispatch = useDispatch();

  const completeTodo = (todo) => {
    const updatedTodo = {...todo};
    updatedTodo.completed = !todo.completed;
    dispatch(todoComplete(updatedTodo));
  };

  return (
    <input
      type="checkbox"
      checked={completed}
      onChange={() => completeTodo(todo)}
    />
  );
};

export default CompleteTodo;
