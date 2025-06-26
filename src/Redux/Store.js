import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./Slices/todos.slice";

const Store = configureStore({
  reducer: {
    todos: todosSlice,
  },
});
export default Store;
