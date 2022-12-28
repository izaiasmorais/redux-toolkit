import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	Button,
	Input,
	Flex,
	Box,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { onClose } from "../store/slicers/modalSlice";
import { FormEvent } from "react";
import { FidelityMarkdown } from "./Markdown";
import { Label } from "./Label";

export function GModal() {
	const isOpen = useSelector((state: RootState) => state.modal.isOpen);
	const dispatch = useDispatch();

	function handleCreateFidelity(event: FormEvent) {
		event.preventDefault();
	}

	return (
		<Modal size="2xl" isOpen={isOpen} onClose={() => dispatch(onClose())}>
			<ModalOverlay />
			<ModalContent py=".5rem">
				<ModalHeader>Criar Fidelidade</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Flex
						direction="column"
						gap=".75rem"
						as="form"
						onSubmit={handleCreateFidelity}
					>
						<Box>
							<Label text="Nome da campanha" />
							<Input type="text" required />
						</Box>

						<Box>
							<Label text="Validade da campanha" />
							<Input type="date" required />
						</Box>

						<Box>
							<Label text="Regulamento" />
							<FidelityMarkdown />
						</Box>

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
