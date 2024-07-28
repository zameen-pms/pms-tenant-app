import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
	toasts: [],
};

const toastSlice = createSlice({
	name: "toast",
	initialState,
	reducers: {
		addToast(state, action) {
			const { type, title, message } = action.payload;
			state.toasts = [
				{
					id: v4(),
					type,
					title,
					message,
				},
				...state.toasts,
			];
		},
		removeToast(state, action) {
			const id = action.payload;
			state.toasts = state.toasts.filter((toast) => toast.id !== id);
		},
	},
});

export const { addToast, removeToast } = toastSlice.actions;

export const getToasts = (state) => state.toast.toasts;

export default toastSlice.reducer;
