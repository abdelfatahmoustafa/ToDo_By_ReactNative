import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    loading: false,
    error: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    markAsCompleted: (state, action) => {
      const id = action.payload;
      const todo = state.todos.filter((todo) => todo.id === id);
      console.log("filter", todo);

      if (todo.length > 0) {
        todo[0].completed = !todo[0].completed;
      }
    },
  },
});

export const { addTodo, removeTodo, markAsCompleted } = todosSlice.actions;
export default todosSlice.reducer;
