import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { format } from "date-fns";

interface newCampaig {
	nome: string;
	semValidade: boolean;
	validoAte: string;
	regulamento: string;
}

const newCampaignSlice = createSlice({
	name: "newCampaig",
	initialState: {
		nome: "",
		semValidade: false,
		validoAte: "",
		regulamento: "",
	} as newCampaig,
	reducers: {
		setCampaignName(state, action: PayloadAction<string>) {
			state.nome = action.payload;
		},
		setCampaignWithoutValidate(state, action: PayloadAction<boolean>) {
			state.semValidade = action.payload;
		},
		setCampaignValidade(state, action: PayloadAction<string>) {
			let formattedDate = format(new Date(action.payload), "dd/MM/yyyy");

			state.validoAte = formattedDate;
		},
		setCampaignRegulation(state, action: PayloadAction<string>) {
			state.regulamento = action.payload;
		},
	},
});

export default newCampaignSlice;

export const {
	setCampaignName,
	setCampaignRegulation,
	setCampaignValidade,
	setCampaignWithoutValidate,
} = newCampaignSlice.actions;
