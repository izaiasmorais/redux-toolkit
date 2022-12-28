import { Input, Box, Checkbox, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Label } from "../Label";
import { FidelityMarkdown } from "../Markdown";
import {
	setCampaignName,
	setCampaignValidade,
	setCampaignWithoutValidate,
} from "../../store/slicers/newCampaignSlice";

export function General() {
	const newCampaign = useSelector((state: RootState) => state.newCampaign);
	const dispatch = useDispatch();

	return (
		<>
			<Box>
				<Label text="Nome da campanha" />
				<Input
					type="text"
					placeholder="Junte 10 selos e troque por uma pizza"
					required
					value={newCampaign.nome}
					onChange={(e) => dispatch(setCampaignName(e.target.value))}
				/>
			</Box>

			<Box>
				<Label text="Validade da campanha" />
				<Input
					type="date"
					required
					onChange={(e) =>
						dispatch(setCampaignValidade(new Date(e.target.value)))
					}
				/>
			</Box>

			<Flex gap=".5rem">
				<Checkbox
					colorScheme="purple"
					name="semValidade"
					isChecked={newCampaign.semValidade}
					onChange={(e) =>
						dispatch(setCampaignWithoutValidate(e.target.checked))
					}
				>
					Sem validade
				</Checkbox>
			</Flex>

			<Box>
				<Label text="Regulamento" />
				<FidelityMarkdown />
			</Box>
		</>
	);
}
