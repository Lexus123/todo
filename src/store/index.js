import { configureStore } from "@reduxjs/toolkit";
import { notificationsReducer } from "./notifications";
import { todosReducer } from "./todos";
import { save, load } from "redux-localstorage-simple";
import { themesReducer } from "./themes";

const store = configureStore({
	middleware: [save({
		states: ["todos", "themes"],
		namespace: "app",
		namespaceSeparator: "-"
	})],
	reducer: {
		todos: todosReducer,
		themes: themesReducer,
		notifications: notificationsReducer
	},
	preloadedState: load({
		states: ["todos", "themes"],
		namespace: "app",
		namespaceSeparator: "-"
	})
});

export default store;