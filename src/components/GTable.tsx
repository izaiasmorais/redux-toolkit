import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	TableCaption,
	TableContainer,
} from "@chakra-ui/react";
import { TableItem } from "./TableItem";

export function GTable() {
	return (
		<TableContainer>
			<Table variant="simple">
				<TableCaption>Total de registros: </TableCaption>
				<Thead>
					<Tr>
						<Th>Nome da Campanha</Th>
						<Th isNumeric>Selos</Th>
						<Th>R$ Investido</Th>
						<Th>Validade</Th>
						<Th>Ativo</Th>
						<Th>Ver</Th>
						<Th>Editar</Th>
						<Th>Excluir</Th>
					</Tr>
				</Thead>

				<Tbody>
					<TableItem />
					<TableItem />
				</Tbody>
			</Table>
		</TableContainer>
	);
}
