import {
	Box, Grid, GridItem, Container, Text, Flex, FormControl, FormLabel,
	Input, Button,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

const Signup = () => {
	const BackgroundImage = require('./../assets/images/auth-image-1.jpeg');
	return (
		<Box bg={'gray.50'} maxH={'calc(100vh)'}>
			<Container
				minW={['full', 'full', 'full', 'full', '8xl']}
				position={'absolute'}
				top={'24'}
				left={0}
				right={0}
				bottom={0}
				margin={'auto'}
			>
				<Grid
					mx={['1%', '1%', '1%', '7%']}
					templateRows='repeat(1, 1fr)'
					templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(5, 1fr)']}
					h={'700px'}
					boxShadow={'lg'}
				>
					<GridItem colSpan={[1, 1, 1, 3]} roundedTopLeft={'md'} roundedBottomLeft={'md'}>
						<Box
							marginY={'20'}
							marginX={['3', '3', '20', '20']}
						>
							<Text
								as={'h1'}
								fontSize={['xl', 'xl', '2xl', '3xl']}
								fontWeight={'bold'}
								textAlign={'center'}
								mb={'10'}
							>
								Create an Account
							</Text>
							<Flex flexDirection={['column', 'column', 'column', 'row']} justifyContent={'space-between'} mb={7}>
								<FormControl isRequired w={['100%', '100%', '100%', '48%']}>
									<FormLabel htmlFor='full-name' mb={2}>First name</FormLabel>
									<Input id='full-name' placeholder='Full name' borderColor={'gray.300'} />
								</FormControl>
								<FormControl isRequired w={['100%', '100%', '100%', '48%']}>
									<FormLabel htmlFor='last-name' mb={2}>Last name</FormLabel>
									<Input id='last-name' placeholder='Last name' borderColor={'gray.300'} />
								</FormControl>
							</Flex>
							<FormControl isRequired mt={['6', '6', '6', '0']} mb={7}>
								<FormLabel htmlFor='email' mb={2}>Email</FormLabel>
								<Input id='email' placeholder='Email' type='email' borderColor={'gray.300'} />
							</FormControl>
							<FormControl isRequired mt={['6', '6', '6', '0']} mb={7}>
								<FormLabel htmlFor='email' mb={2}>Password</FormLabel>
								<Input placeholder='Password' type='password' borderColor={'gray.300'} />
							</FormControl>
							<FormControl isRequired mt={['6', '6', '6', '0']} mb={7}>
								<FormLabel htmlFor='email' mb={2}>Confirm Password</FormLabel>
								<Input placeholder='Password' type='password' borderColor={'gray.300'} />
							</FormControl>
							<Button
								bg={'blue.600'}
								color={'white'}
								size='md'
								borderColor={'blue.600'}
								w={['full', 'full', 'full', 'full', '50%']} ml={['0', '0', '0', '0', '25%']}
								_hover={{
									borderWidth: 1,
									color: 'blue.600',
									backgroundColor: '#ffffff'
								}}
							>
								Create Account
							</Button>
							<Text
								fontSize={['smaller']}
								textAlign={'center'}
								mt={'4'}
							>
								Already have an account?
								<Link to={'/login'}>
									<Text as={'span'} color={'blue.500'}> Login.</Text>
								</Link>
							</Text>
						</Box>
					</GridItem>
					<GridItem
						colSpan={2}
						roundedTopRight={'md'}
						roundedBottomRight={'md'}
						display={['none', 'none', 'none', 'block']}
						sx={{
							background: `url(${BackgroundImage}) center/cover no-repeat`
						}}
					>
						<Box
							backdropFilter='auto'
							backdropBrightness={'60%'}
							h={'100%'}
							w={'100%'}
							display={'flex'}
							justifyContent={'center'}
							alignItems={'center'}
						>
							<Box>
								<Link to={'/'}>
									<Text
										color={'white'}
										as={'h1'}
										fontSize={'6xl'}
										textAlign={'center'}
									>
										EXPECTIN
									</Text>
								</Link>
								<Text
									color={'white'}
									fontSize={'md'}
									textAlign={'center'}
								>
									Have this amazing experience with the tools you need.
								</Text>
							</Box>
						</Box>
					</GridItem>
				</Grid>
			</Container>

		</Box>
	)
}

export default Signup;
