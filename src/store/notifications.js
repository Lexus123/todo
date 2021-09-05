import { createSlice } from "@reduxjs/toolkit";

const initialNotificationsState = {
	show: false
};

const notificationsSlice = createSlice({
	name: "notifications",
	initialState: initialNotificationsState,
	reducers: {
		setShow(state, action) {
			state.show = action.payload;
		}
	}
});

export const notificationsActions = notificationsSlice.actions;
export const notificationsReducer = notificationsSlice.reducer;