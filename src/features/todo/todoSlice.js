import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  isAnyOf,
} from "@reduxjs/toolkit";
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        todoAdapter.upsertMany(state, payload);
      })
      .addCase(createTodo.fulfilled, (state, { payload }) => {
        state.loading = false;
        todoAdapter.addOne(state, payload);
      })
      .addCase(todoDelete.fulfilled, (state, { payload }) => {
        state.loading = false;
        todoAdapter.removeOne(state, payload);
      })
      .addCase(todoComplete.fulfilled, (state, { payload }) => {
        state.loading = false;
        todoAdapter.upsertOne(state, payload);
      })
      .addMatcher(
        isAnyOf(
          fetchTodos.pending,
          createTodo.pending,
          todoDelete.pending,
          todoComplete.pending
        ),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchTodos.rejected,
          createTodo.rejected,
          todoDelete.rejected,
          todoComplete.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        }
      );
  },
});

export const todosSelector = (state) => state.todos;

export const {
  selectById: selectTodoById,
  selectIds: selectTodoIds,
  selectEntities: selectTodoEntities,
  selectAll: selectAllTodos,
  selectTotal: selectTotalTodos,
} = todoAdapter.getSelectors((state) => state.todos);

export default todoSlice.reducer;
