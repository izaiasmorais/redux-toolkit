import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../lib/axios";

interface IFidelity {
	id: string;
	nome: "";
	quantidadeSelo: 0;
	investido: 0;
	validade: "";
	ativo: true;
}

interface IQuote {
	anime: string;
	character: string;
	quote: string;
}

export const fetchQuotes = createAsyncThunk(
	"fidelityList/fetchQuotes",
	async () => {
		const response: IQuote[] = await api.get(
			"https://animechan.vercel.app/api/quotes"
		);

		return response;
	}
);

const fidelityListSlice = createSlice({
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
	extraReducers(builder) {
		builder.addCase(fetchQuotes.fulfilled, (state, { payload }) => {
			console.log(payload);
		});
	},
});

export default fidelityListSlice;

export const fidelityListActions = fidelityListSlice.actions;
