import { configureStore } from "@reduxjs/toolkit";
import { notificationsReducer } from "./notifications";
import { todosReducer } from "./todos";
import { save, load } from "redux-localstorage-simple";
import { themesReducer } from "./themes";
import { localesReducer } from "./locales";

const store = configureStore({
	middleware: [save({
		states: ["todos", "themes", "locales"],
		namespace: "app",
		namespaceSeparator: "-"
	})],
	reducer: {
		locales: localesReducer,
		todos: todosReducer,
		themes: themesReducer,
		notifications: notificationsReducer
	},
	preloadedState: load({
		states: ["todos", "themes", "locales"],
		namespace: "app",
		namespaceSeparator: "-"
	})
});

export default store;