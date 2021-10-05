import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../models/todo";

export interface SortMethod {
	key: number,
	on: string,
	direction: string
}

export interface TodosState {
	todos: Todo[],
	searchText: string,
	sortMethod: SortMethod
}

const initialTodosState: TodosState = {
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
		addTodo(state, action: PayloadAction<Todo>) {
			state.todos.push(action.payload);
		},
		completeTodo(state, action: PayloadAction<number>) {
			state.todos = state.todos.map(todo => todo.id === action.payload ? { ...todo, completed: true } : todo);
		},
		deleteTodo(state, action: PayloadAction<number>) {
			state.todos = state.todos.filter(todo => todo.id !== action.payload);
		},
		setSearchText(state, action: PayloadAction<string>) {
			state.searchText = action.payload;
		},
		setSortMethod(state, action: PayloadAction<SortMethod>) {
			state.sortMethod = action.payload;
		}
	}
});

export const todosActions = todosSlice.actions;
export const todosReducer = todosSlice.reducer;