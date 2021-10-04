import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NotificationsState {
	show: boolean
}

const initialNotificationsState: NotificationsState = {
	show: false
};

const notificationsSlice = createSlice({
	name: "notifications",
	initialState: initialNotificationsState,
	reducers: {
		setShow(state, action: PayloadAction<boolean>) {
			state.show = action.payload;
		}
	}
});

export const notificationsActions = notificationsSlice.actions;
export const notificationsReducer = notificationsSlice.reducer;