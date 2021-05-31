import React from "react";
import { useDispatch } from "react-redux";
import { todoDelete } from "./todoSlice";

const DeleteTodo = ({ id }) => {
  const dispatch = useDispatch();

  const deleteTodo = (id) => {
    dispatch(todoDelete(id));
  };

  return <button onClick={() => deleteTodo(id)}>Delete</button>;
};

export default DeleteTodo;
