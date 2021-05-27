import { createEntityAdapter } from "@reduxjs/toolkit";

const todoAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.id - a.id
});


