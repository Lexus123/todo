import { createSlice } from "@reduxjs/toolkit";

const initialTodosState = {
	todos: [],
	searchText: "",
	sortMethod: {
		key: 1,
		on: "Name",
		direction: "(A - Z)"
	}
};

const todosSlice = createSlice({
	name: "todos",
	initialState: initialTodosState,
	reducers: {
		addTodo(state, action) {
			state.todos.push(action.payload);
		},
		completeTodo(state, action) {
			state.todos = state.todos.map(todo => todo.id === action.payload ? { ...todo, completed: true } : todo);
		},
		deleteTodo(state, action) {
			state.todos = state.todos.filter(todo => todo.id !== action.payload);
		},
		setSearchText(state, action) {
			state.searchText = action.payload;
		},
		setSortMethod(state, action) {
			state.sortMethod = action.payload;
		}
	}
});

export const todosActions = todosSlice.actions;
export const todosReducer = todosSlice.reducer;