import { createSlice } from "@reduxjs/toolkit";

interface IModal {
	isOpen: boolean;
}

const modalSlice = createSlice({
	name: "modal",
	initialState: {} as IModal,
	reducers: {
		onOpen(state) {
			state.isOpen = true;
		},
		onClose(state) {
			state.isOpen = false;
		},
	},
});

export default modalSlice;

export const { onClose, onOpen } = modalSlice.actions;
