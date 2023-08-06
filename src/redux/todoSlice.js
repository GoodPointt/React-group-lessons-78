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
    editTodo(state, action) {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload.id) todo.text = action.payload.text;
        return todo;
      });
    },
  },
});

export const selectTodos = state => state.todos;

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
