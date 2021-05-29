import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "./todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();

  const initialState = { title: "", completed: false };
  const [todo, setTodo] = useState(initialState);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const addTodo = (event) => {
    event.preventDefault();
    todo.id = nanoid();

    dispatch(createTodo(todo));

    setTodo(initialState);
  };

  const renderTodoForm = () => {
    return (
      <form>
        <input
          type="text"
          name="title"
          value={todo.title}
          onChange={handleOnChange}
        />
        <button onClick={addTodo}>Add Todo</button>
      </form>
    );
  };

  return <>{renderTodoForm()}</>;
};

export default AddTodo;
