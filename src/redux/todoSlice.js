const { createSlice } = require('@reduxjs/toolkit');

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [
      {
        id: '1',
        text: 'sadsadas asdasd as das d',
      },
    ],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const selectTodos = state => state.todos;

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
