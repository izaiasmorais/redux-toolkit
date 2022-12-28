import { Button, Flex, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { GModal } from "./components/GModal";
import { GTable } from "./components/GTable";
import { onOpen } from "./store/slicers/modalSlice";

function App() {
	const dispatch = useDispatch();

	return (
		<Flex w="100%" h="100%">
			<Flex
				direction="column"
				w="100%"
				maxW="1100px"
				h="600px"
				mx="auto"
				my="100px"
			>
				<Flex
					bg="#f5f5f5"
					justify="space-between"
					align="center"
					px="1rem"
					py=".5rem"
					borderRadius=".5rem"
				>
					<Text>Criar fidelidade</Text>
					<Button
						outline="none"
						colorScheme="purple"
						onClick={() => dispatch(onOpen())}
					>
						Novo
					</Button>
				</Flex>
				<GTable />
			</Flex>

			<GModal />
		</Flex>
	);
}

export default App;
