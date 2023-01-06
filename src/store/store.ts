import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./slicers/modalSlice";
import logger from "redux-logger";
import newCampaignSlice from "./slicers/newCampaignSlice";
import fidelityListSlice from "./slicers/fidelityListSlice";

export const store = configureStore({
	reducer: {
		modal: modalSlice.reducer,
		newCampaign: newCampaignSlice.reducer,
		fidelitySlice: fidelityListSlice.reducer,
	},
	middleware: [logger],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
