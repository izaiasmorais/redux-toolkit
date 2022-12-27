import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

interface ICartItems {
	id: string;
	title: string;
	price: number;
	quantity: number;
	totalPrice: number;
}

const initialState = {
	cartItems: [] as ICartItems[],
	totalQuantity: 0,
	totalAmount: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState: initialState,

	reducers: {
		addItem(state, action) {
			const newItem = action.payload;
			const i = state.cartItems.findIndex((item) => item.id === newItem.id);
			state.totalQuantity++;

			if (i <= 0) {
				state.cartItems.push({
					id: newItem.id,
					title: newItem.title,
					price: newItem.price,
					totalPrice: newItem.totalPrice,
					quantity: newItem.quantity,
				});
			} else {
				state.cartItems[i].quantity++;
				state.cartItems[i].totalPrice =
					Number(state.cartItems[i].totalPrice) + Number(newItem.price);
			}

			state.totalAmount = state.cartItems.reduce(
				(total, item) => total + Number(item.price) * Number(item.quantity),
				state.totalAmount
			);
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
