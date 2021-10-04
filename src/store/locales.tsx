import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocalesState {
	locale: string
}

const initialLocalesState: LocalesState = {
	locale: navigator.language
};

const localesSlice = createSlice({
	name: "locales",
	initialState: initialLocalesState,
	reducers: {
		setLocale(state, action: PayloadAction<string>) {
			state.locale = action.payload;
		}
	}
});

export const localesActions = localesSlice.actions;
export const localesReducer = localesSlice.reducer;