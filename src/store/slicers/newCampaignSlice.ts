import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface newCampaig {
	nome: string;
	semValidade: boolean;
	validoAte: Date;
	regulamento: string;
}

const newCampaignSlice = createSlice({
	name: "newCampaig",
	initialState: {} as newCampaig,
	reducers: {
		setCampaignName(state, action: PayloadAction<string>) {
			state.nome = action.payload;
		},
		setCampaignWithoutValidate(state, action: PayloadAction<boolean>) {
			state.semValidade = action.payload;
		},
		setCampaignValidade(state, action: PayloadAction<Date>) {
			state.validoAte = new Date(action.payload);
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
