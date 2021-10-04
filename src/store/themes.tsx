import { createSlice } from "@reduxjs/toolkit";

interface ThemesState {
	theme: string
}

const initialThemesState: ThemesState = {
	theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"
};

const themesSlice = createSlice({
	name: "themes",
	initialState: initialThemesState,
	reducers: {
		toggleTheme(state) {
			state.theme = state.theme === "light" ? "dark" : "light";
		}
	}
});

export const themesActions = themesSlice.actions;
export const themesReducer = themesSlice.reducer;