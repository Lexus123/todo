import { configureStore } from "@reduxjs/toolkit";
import { notificationsReducer } from "./notifications";
import { todosReducer } from "./todos";
import { themesReducer } from "./themes";
import { localesReducer } from "./locales";
import { save, load } from "redux-localstorage-simple";

const store = configureStore({
	middleware: [
		save({
			states: ["todos", "themes", "locales"],
			namespace: "todo.lexvanderwerff.com",
			namespaceSeparator: "-"
		})
	],
	reducer: {
		locales: localesReducer,
		todos: todosReducer,
		themes: themesReducer,
		notifications: notificationsReducer
	},
	preloadedState: load({
		states: ["todos", "themes", "locales"],
		namespace: "todo.lexvanderwerff.com",
		namespaceSeparator: "-"
	})
});

export type RootState = ReturnType<typeof store.getState>
export default store;