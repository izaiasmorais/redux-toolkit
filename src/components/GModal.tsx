import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Input,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { onClose } from "../store/slicers/modalSlice";

export function GModal() {
	const isOpen = useSelector((state: RootState) => state.modal.isOpen);
	const dispatch = useDispatch();

	return (
		<Modal size="lg" isOpen={isOpen} onClose={() => dispatch(onClose())}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Criar Fidelidade</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<label>Nome da campanha</label>
					<Input type="text" />

					<label>Validade da campanha</label>
					<Input type="date" />
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="red" mr={3} onClick={() => dispatch(onClose())}>
						Cancelar
					</Button>
					<Button colorScheme="purple">Confirmar</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
