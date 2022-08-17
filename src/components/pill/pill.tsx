import React from "react";
import { HStack, Image, Text, } from "@chakra-ui/react";

type PillProps = {
	active?: boolean
	description: string
};

const Pill = (prop: PillProps) => {
	const { active, description } = prop;
	return (
		<HStack minW={200} h={70} rounded={'lg'} borderWidth={1} p={2} spacing={5} borderColor={active ? 'pink.400' : ''}>
			<Image src='https://bit.ly/dan-abramov' alt='Description' h={50} width={50} rounded={'lg'} />
			<Text>{description}</Text>
		</HStack>
	);
};

export default Pill;