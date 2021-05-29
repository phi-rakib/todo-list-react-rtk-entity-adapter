import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, todosSelector } from "./todoSlice";
import ListTodo from './ListTodo';
import AddTodo from './AddTodo';

const TodoPage = () => {
  const { loading, error } = useSelector(todosSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <AddTodo />
      {error}
      {loading && "loading..."}
      <ListTodo />
    </>
  );
};

export default TodoPage;
