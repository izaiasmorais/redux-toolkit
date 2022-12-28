import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	Button,
	Flex,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { onClose } from "../store/slicers/modalSlice";
import { FormEvent } from "react";
import { ModalTabs } from "./ModalTabs";
import { General } from "./ModalTabs/General";

export function GModal() {
	const { activeTab, isOpen } = useSelector((state: RootState) => state.modal);
	const newCampaign = useSelector((state: RootState) => state.newCampaign);
	const dispatch = useDispatch();

	function handleCreateFidelity(event: FormEvent) {
		event.preventDefault();

		console.log(newCampaign);
	}

	return (
		<Modal size="2xl" isOpen={isOpen} onClose={() => dispatch(onClose())}>
			<ModalOverlay />
			<ModalContent py=".5rem">
				<ModalHeader>Criar Fidelidade</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<ModalTabs activeTab={activeTab} />

					<Flex
						direction="column"
						gap=".75rem"
						as="form"
						onSubmit={handleCreateFidelity}
					>
						{activeTab === "general" ? (
							<General />
						) : activeTab === "score" ? (
							<Flex> Pontuar </Flex>
						) : (
							<Flex>Resgatar</Flex>
						)}

						<Flex gap=".5rem" justify="flex-end" mt="2rem">
							<Button
								colorScheme="red"
								mr={3}
								onClick={() => dispatch(onClose())}
							>
								Cancelar
							</Button>
							<Button colorScheme="purple" type="submit">
								Confirmar
							</Button>
						</Flex>
					</Flex>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
}
