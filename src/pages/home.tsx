import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import {
	Box, Text, Button, Container, Divider, Flex, Image, Stack,
	FormControl, FormLabel, Input, Textarea,
} from '@chakra-ui/react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

import Header from './../components/header/header';
import ResponsiveImage from './../components/responsive-image';

const Home = () => {
	const headerCarouselHeight = ['400px', '400px', '630px', '900px'];
	return (
		<Box>
			<Header />
			<Box>
				<Carousel
					animationHandler={'fade'}
					showArrows={false}
					infiniteLoop={true}
					autoPlay={true}
					stopOnHover={false}
					showIndicators={false}
				>
					<Box h={headerCarouselHeight} position='relative'>
						<ResponsiveImage
							src={{
								base: require('./../assets/images/home-image-6.jpeg'),
								lg: require('./../assets/images/home-image-3.jpeg')
							}}
						/>
						<Box
							position='absolute'
							top={['25%', '35%', '45%', '10%']}
							left={['5%', '5%', '5%', '10%']}
							w={[380, 520]}
							textAlign={['center', 'left', 'left', 'left']}
							py={10}
							px={5}
							bgColor={'blackAlpha.200'}
							rounded={'md'}
						>
							<Text
								as={'h1'}
								fontSize={['xl', 'xl', '2xl', '3xl']}
								noOfLines={2}
								color={'blue.600'}
								fontWeight={'black'}
								mb={10}
							>
								Know more about each stage in your pregnancy
							</Text>
							<Button
								py={'6'}
								px={'16'}
								color={'blue.600'}
								bg={'white'}
								rounded={'md'}
								rightIcon={<BsArrowRight size={25} />}
							>
								Get Started
							</Button>
						</Box>
					</Box>
					<Box h={headerCarouselHeight}>
						<ResponsiveImage
							src={{
								base: require('./../assets/images/home-image-5.jpeg'),
								lg: require('./../assets/images/home-image-2.jpeg')
							}}
						/>
						<Box
							position='absolute'
							bottom={50}
							left={['5%', '5%', '5%', '3%']}
							w={[380, 520]}
							textAlign={['center', 'left', 'left', 'left']}
							py={10}
							px={5}
							bgColor={'blackAlpha.200'}
							rounded={'md'}
						>
							<Text
								as={'h1'}
								fontSize={['xl', 'xl', '2xl', '3xl']}
								noOfLines={2}
								color={'white'}
								fontWeight={'black'}
								mb={10}
							>
								Join a community of people sharing your journey
							</Text>
							<Button
								py={'6'}
								px={'16'}
								color={'blue.600'}
								bg={'white'}
								rounded={'md'}
								rightIcon={<BsArrowRight size={25} />}
							>
								Learn More
							</Button>
						</Box>
					</Box>
					<Box h={headerCarouselHeight}>
						<ResponsiveImage
							src={{
								base: require('./../assets/images/home-image-4.jpeg'),
								lg: require('./../assets/images/home-image-1.jpeg')
							}}
						/>
						<Box
							position='absolute'
							top={['25%', '35%', '50%', '35%']}
							right={['5%', '5%', '27%', '15%']}
							w={[380, 520]}
							textAlign={['center', 'left', 'left', 'right']}
							py={10}
							px={5}
							bgColor={'blackAlpha.200'}
							rounded={'md'}
						>
							<Text
								as={'h1'}
								fontSize={['xl', 'xl', '2xl', '3xl']}
								noOfLines={2}
								color={'white'}
								fontWeight={'black'}
								mb={10}
							>
								Benefit from a platfoem to get assistance in case of need
							</Text>
							<Button
								py={'6'}
								px={'16'}
								color={'blue.600'}
								bg={'white'}
								rounded={'md'}
								leftIcon={<BsArrowLeft size={25} />}
							>
								Post a request
							</Button>
						</Box>
					</Box>
				</Carousel>
			</Box>
			<Box py={'20'} textAlign={'center'} my={20}>
				<Container minW={['full', 'full', 'full', 'full', '8xl']}>
					<Text
						as={'h1'}
						fontSize={['xl', 'xl', '2xl', '3xl']}
						fontWeight={'bold'}
						color={'blue.600'}
						textAlign={'center'}
					>
						Our Awesome Features
					</Text>
					<Text
						fontWeight={'thin'}
						color={'gray.500'}
						textAlign={'center'}
						mt={2}
					>
						Find the different ways to make your journey better
					</Text>
					<Divider w={40} mx={'auto'} borderBottomWidth={3} mt={2} mb={'14'} />
					<Flex justifyContent={'space-between'} pt={'20'} direction={['column', 'column', 'column', 'row']}>
						<Box
							boxShadow={'md'}
							px={7}
							py={12}
							mx={['auto', 'auto', 'auto', 0]}
							my={['5', '5', '5', '0']}
							w={['100%', '100%', '80%', '30%']}
							rounded={'md'}
							minH={250}
						>
							<Image
								boxSize='180px'
								src='https://bit.ly/dan-abramov'
								alt='Track pregnancy'
								rounded={'full'}
								mx={'auto'}
							/>
							<Text
								color={'blue.600'}
								mb={'3'}
								mt={'16'}
								fontSize={'xl'}
								fontWeight={'semibold'}
							>
								STAGES
							</Text>
							<Text>
								Learn more about what to expect during your pregnancy as well as after delivery. You could know more about symptoms, statistics, on call facilities, and so much more.
							</Text>
						</Box>
						<Box
							boxShadow={'md'}
							px={7}
							py={12}
							mx={['auto', 'auto', 'auto', 0]}
							my={['5', '5', '5', '0']}
							w={['100%', '100%', '80%', '30%']}
							rounded={'md'}
							minH={250}>
							<Image
								boxSize='180px'
								src='https://bit.ly/dan-abramov'
								alt='Track pregnancy'
								rounded={'full'}
								mx={'auto'}
							/>
							<Text
								color={'blue.600'}
								mb={'3'}
								mt={'16'}
								fontSize={'xl'}
								fontWeight={'semibold'}
							>
								COMMUNITY
							</Text>
							<Text>
								Connect, share and learn from different experiences in the community section. You are not alone and there is someone outhere going through a similar situation.
							</Text>
						</Box>
						<Box
							boxShadow={'md'}
							px={7}
							py={12}
							mx={['auto', 'auto', 'auto', 0]}
							my={['5', '5', '5', '0']}
							w={['100%', '100%', '80%', '30%']}
							rounded={'md'}
							minH={250}>
							<Image
								boxSize='180px'
								src='https://bit.ly/dan-abramov'
								alt='Track pregnancy'
								rounded={'full'}
								mx={'auto'}
							/>
							<Text
								color={'blue.600'}
								mb={'3'}
								mt={'16'}
								fontSize={'xl'}
								fontWeight={'semibold'}
							>
								CHARITY
							</Text>
							<Text>
								In case of need or financial assistance with respect to pregnancy, child birth, and post delivery, you can craete a request for funding so others can donate to help you reach your goal.
							</Text>
						</Box>
					</Flex>
				</Container>
			</Box>
			<Box py={'10'} bg={'gray.50'} mb={10} px={['0', '0', '10%', '0']}>
				<Container py={'28'} minW={['full', 'full', 'full', 'full', '8xl']}>
					<Stack spacing={'28'} direction={['column', 'column', 'column', 'row']}>
						<Box w={['100%', '100%', '100%', '35%']}>
							<Text
								as={'h1'}
								fontSize={['xl', 'xl', '2xl', '3xl']}
								fontWeight={'bold'}
								color={'blue.600'}
								mb={'7'}
							>
								About Us
							</Text>
							<Text>
								Learn more about what to expect during your pregnancy as well as after delivery. You could know more about symptoms, statistics, on call facilities, and so much more.
							</Text>
						</Box>
						<Box w={['100%', '100%', '100%', '75%']}>
							<Flex flexDirection={['column', 'column', 'column', 'row']} justifyContent={'space-between'} mb={10}>
								<FormControl isRequired w={['100%', '100%', '100%', '48%']}>
									<FormLabel htmlFor='full-name' mb={2}>Full name</FormLabel>
									<Input id='full-name' placeholder='Full name' />
								</FormControl>
								<FormControl isRequired w={['100%', '100%', '100%', '48%']} mt={['6', '6', '6', '0']}>
									<FormLabel htmlFor='email' mb={2}>Email</FormLabel>
									<Input id='email' placeholder='Email' type='email' />
								</FormControl>
							</Flex>
							<FormControl>
								<FormLabel htmlFor='email' mb={2}>Message</FormLabel>
								<Textarea
									placeholder='Send us a message and we will reply within 24h...'
									size='md'
									h={150}
								/>
							</FormControl>
						</Box>
					</Stack>
				</Container>
			</Box>

		</Box>
	)
}

export default Home;
