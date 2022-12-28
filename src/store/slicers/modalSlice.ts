import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IModal {
	isOpen: boolean;
	activeTab: "general" | "score" | "rescue";
}

const modalSlice = createSlice({
	name: "modal",
	initialState: {
		isOpen: false,
		activeTab: "general",
	} as IModal,
	reducers: {
		onOpen(state) {
			state.isOpen = true;
		},
		onClose(state) {
			state.isOpen = false;
		},
		setActiveTab(state, action: PayloadAction<"general" | "score" | "rescue">) {
			state.activeTab = action.payload;
		},
	},
});

export default modalSlice;

export const { onClose, onOpen } = modalSlice.actions;
