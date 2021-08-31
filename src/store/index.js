import { configureStore } from "@reduxjs/toolkit";
// import { optionsReducer } from "./options";

const store = configureStore({
	reducer: {
		// options: optionsReducer
	}
});

export default store;
