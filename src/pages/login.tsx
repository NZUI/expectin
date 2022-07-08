import {
	Box, Grid, GridItem, Container, Text, Flex, FormControl, FormLabel,
	Input, Button,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

const Login = () => {
	const BackgroundImage = require('./../assets/images/auth-image-2.jpeg');
	return (
		<Box bg={'gray.50'} h={'calc(100vh)'} pt={['20%', '20%', '20%', '10%']}>
			<Container minW={['full', 'full', 'full', 'full', '8xl']}>
				<Grid
					mx={['1%', '1%', '1%', '7%']}
					templateRows='repeat(1, 1fr)'
					templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(5, 1fr)']}
					h={'700px'}
					boxShadow={'lg'}
				>
					<GridItem
						colSpan={3}
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
					<GridItem colSpan={[1, 1, 1, 2]} roundedTopLeft={'md'} roundedBottomLeft={'md'}>
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
								Login
							</Text>
							<FormControl isRequired mt={['6', '6', '6', '0']} mb={7}>
								<FormLabel htmlFor='email' mb={2}>Email</FormLabel>
								<Input id='email' placeholder='Email' type='email' borderColor={'gray.300'} />
							</FormControl>
							<FormControl isRequired mt={['6', '6', '6', '0']} mb={4}>
								<FormLabel htmlFor='email' mb={2}>Password</FormLabel>
								<Input placeholder='Password' type='password' borderColor={'gray.300'} />
							</FormControl>
							<Flex justifyContent={'space-between'} mb={7} direction={['column', 'column', 'row', 'column', 'row']}>
								<Text
									fontSize={['smaller']}
									mt={3}
								>
									I an new,
									<Link to={'/signup'}>
										<Text as={'span'} color={'blue.500'}> create account</Text>
									</Link>
								</Text>
								<Link to={'/login'}>
									<Text mt={3} fontSize={['smaller']} color={'blue.500'}>Forget Password</Text>
								</Link>
							</Flex>
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
								Login
							</Button>
						</Box>
					</GridItem>
				</Grid>
			</Container>

		</Box>
	)
}

export default Login;
