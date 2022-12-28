import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./slicers/modalSlice";
import logger from "redux-logger";
import newCampaignSlice from "./slicers/newCampaignSlice";

export const store = configureStore({
	reducer: {
		modal: modalSlice.reducer,
		newCampaign: newCampaignSlice.reducer,
	},
	middleware: [logger],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
