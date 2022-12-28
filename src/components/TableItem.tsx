import { Tr, Td, Switch, Button } from "@chakra-ui/react";
import { Eye, Pencil, Trash } from "phosphor-react";

export function TableItem() {
	return (
		<Tr>
			<Td>Junte 10 selos e troque por uma pizza</Td>
			<Td isNumeric>25</Td>
			<Td>R$ 1.259,00</Td>
			<Td>12/02/2023</Td>
			<Td>
				<Switch colorScheme="green" value="true" outline="none" />
			</Td>
			<Td>
				<Button w="20px" h="30px" p="0">
					<Eye size={16} />
				</Button>
			</Td>
			<Td>
				<Button w="20px" h="30px" p="0">
					<Pencil size={16} />
				</Button>
			</Td>
			<Td>
				<Button w="20px" h="30px" p="0" colorScheme="red">
					<Trash size={16} />
				</Button>
			</Td>
		</Tr>
	);
}
