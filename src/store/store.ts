import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import cartUiSlice from "./cart/cartUiSlice";

const store = configureStore({
	reducer: {
		cart: cartUiSlice.reducer,
		cartUi: cartUiSlice.reducer,
	},
});

export default store;
