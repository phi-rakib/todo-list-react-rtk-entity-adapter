import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return response.data;
  } catch (error) {
    throw Error(error);
  }
});

export const createTodo = createAsyncThunk("todo/createTodo", async (todo) => {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      todo
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw Error(error);
  }
});

export const todoDelete = createAsyncThunk("todo/todoDelete", async (id) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return id;
  } catch (error) {
    throw Error(error);
  }
});

export const todoComplete = createAsyncThunk(
  "todo/todoComplete",
  async (todo) => {
    try {
      await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
        todo
      );
      return todo;
    } catch (error) {
      throw Error(error);
    }
  }
);

const todoAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.id - a.id,
});

export const initialState = todoAdapter.getInitialState({
  loading: false,
  error: null,
});

const todoSlice = createSlice({
  name: "todo",
  initialState,
});

export default todoSlice.reducer;
