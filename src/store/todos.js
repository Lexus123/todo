import { createSlice } from "@reduxjs/toolkit";

const initialTodosState = {
	todos: [
		{
			createdAt: 123,
			isCompleted: false,
			text: "abc",
			id: 1
		},
		{
			createdAt: 234,
			isCompleted: true,
			text: "cbd",
			id: 2
		}
	],
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
		removeTodo(state, action) {

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