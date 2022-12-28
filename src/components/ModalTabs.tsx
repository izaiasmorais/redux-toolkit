import { Flex, Text } from "@chakra-ui/react";

interface Props {
	activeTab: string;
}

export function ModalTabs({ activeTab }: Props) {
	return (
		<Flex gap="1.5rem" mb="1rem">
			<Text
				position="relative"
				pb=".5rem"
				color={activeTab === "general" ? "purple.600" : "black"}
				_before={{
					content: `" "`,
					width: "100%",
					height: "2px",
					position: activeTab === "general" ? "absolute" : "none",
					background: "purple.600",
					bottom: 0,
				}}
			>
				Geral
			</Text>
			<Text
				color={activeTab === "score" ? "purple.600" : "black"}
				position="relative"
				pb=".5rem"
				_before={{
					content: `" "`,
					width: "100%",
					height: "2px",
					position: activeTab === "score" ? "absolute" : "none",
					background: "purple.600",
					bottom: 0,
				}}
			>
				Pontuar
			</Text>
			<Text
				color={activeTab === "reedem" ? "purple.600" : "black"}
				position="relative"
				pb=".5rem"
				_before={{
					content: `" "`,
					width: "100%",
					height: "2px",
					position: activeTab === "reedem" ? "absolute" : "none",
					background: "purple.600",
					bottom: 0,
				}}
			>
				Resgatar
			</Text>
		</Flex>
	);
}
