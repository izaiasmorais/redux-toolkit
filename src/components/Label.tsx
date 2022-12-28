import { FormLabelProps, FormLabel } from "@chakra-ui/react";

interface Props extends FormLabelProps {
	text: string;
}

export function Label({ text, ...rest }: Props) {
	return (
		<FormLabel as="label" {...rest} mt=".5rem" fontWeight={500}>
			{text}
		</FormLabel>
	);
}
