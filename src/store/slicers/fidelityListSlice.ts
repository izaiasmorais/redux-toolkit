import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFidelity {
	id: string;
	nome: "";
	quantidadeSelo: 0;
	investido: 0;
	validade: "";
	ativo: true;
}

const modalSlice = createSlice({
	name: "fidelityList",
	initialState: [] as IFidelity[],
	reducers: {
		addFidelity(state, action: PayloadAction<IFidelity>) {
			state.push(action.payload);
		},
		removeFidelity(state, action: PayloadAction<string>) {
			state.filter((item) => item.id !== action.payload);
		},
		changeFidelityStatus(state, action: PayloadAction<string>) {},
	},
});

export default modalSlice;

export const fidelityListActions = modalSlice.actions;
