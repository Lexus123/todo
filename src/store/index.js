import { configureStore } from "@reduxjs/toolkit";
import { notificationsReducer } from "./notifications";
import { todosReducer } from "./todos";
import { save, load } from "redux-localstorage-simple";

const store = configureStore({
	middleware: [save({
		states: ["todos"],
		namespace: "app",
		namespaceSeparator: "-"
	})],
	reducer: {
		todos: todosReducer,
		notifications: notificationsReducer
	},
	preloadedState: load({
		states: ["todos"],
		namespace: "app",
		namespaceSeparator: "-"
	})
});

export default store;