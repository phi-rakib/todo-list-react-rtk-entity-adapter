import { createEntityAdapter } from "@reduxjs/toolkit";

const todoAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.id - a.id,
});

export const initialState = todoAdapter.getInitialState({
  loading: false,
  error: null,
});
