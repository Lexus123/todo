import { configureStore } from "@reduxjs/toolkit";
import { notificationsReducer } from "./notifications";
import { todosReducer } from "./todos";

const store = configureStore({
	reducer: {
		todos: todosReducer,
		notifications: notificationsReducer
	}
});

export default store;
