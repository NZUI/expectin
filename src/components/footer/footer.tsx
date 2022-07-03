import {
	Box, Container, Divider, Grid, GridItem, Text, FormControl, Input,
	Button,
} from '@chakra-ui/react';

const Footer = () => {
	return (
		<Box bg={'black'} pt={'20'} pb={'3'} color={'white'}>
			<Container minW={['full', 'full', 'full', 'full', '8xl']}>
				<Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)']} gap={6} mb={5}>
					<GridItem>
						<Text mb={'5'} fontSize={18}>Our Features</Text>
						<Text fontSize={14} my={'1'}>Track Me</Text>
						<Text fontSize={14} my={'1'}>Community</Text>
						<Text fontSize={14} my={'1'}>Charity</Text>
					</GridItem>
					<GridItem>
						<Text mb={'5'} fontSize={18}>Our Comapny</Text>
						<Text fontSize={14} my={'1'}>About Us</Text>
						<Text fontSize={14} my={'1'}>Privacy</Text>
						<Text fontSize={14} my={'1'}>Terms and Agreement</Text>
					</GridItem>
					<GridItem>
						<Text mb={'5'} fontSize={18}>Subscribe</Text>
						<FormControl isRequired w={'100%'}>
							<Input id='email' placeholder='Email' />
						</FormControl>
						<Button color='blue.600' bg={'white'} size='md' w={['full', 'full', '25%', '50%', '25%']} mt={'3'} ml={['0', '0', '75%', '50%', '75%']}>
							Subscribe
						</Button>
					</GridItem>
				</Grid>
				<Divider w={'100%'} />
				<Text color={'white'} fontSize={'sm'} mt={'5'}>&#169; Copyright - 2022</Text>
			</Container>
		</Box>
	)
}

export default Footer;
