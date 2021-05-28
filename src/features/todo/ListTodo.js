import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { selectAllTodos } from "./todoSlice";

const ListTodo = () => {
  const todos = useSelector(selectAllTodos);

  const renderTodos = todos.map((todo) => (
    <TodoItem todo={todo} key={todo.id} />
  ));

  return (
    <div>
      <h1>Todo List</h1>
      <ul>{renderTodos}</ul>
    </div>
  );
};

export default ListTodo;
