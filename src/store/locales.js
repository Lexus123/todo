import { createSlice } from "@reduxjs/toolkit";

const initialLocalesState = {
	locale: navigator.language
};

const localesSlice = createSlice({
	name: "locales",
	initialState: initialLocalesState,
	reducers: {
		setLocale(state, action) {
			state.locale = action.payload;
		}
	}
});

export const localesActions = localesSlice.actions;
export const localesReducer = localesSlice.reducer;