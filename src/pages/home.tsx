import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import {
	Box, Text, Button,
} from '@chakra-ui/react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

import Header from './../components/header/header';
import ResponsiveImage from './../components/responsive-image';

const Home = () => {
	const headerCarouselHeight = ['400px', '400px', '630px', '900px'];
	return (
		<div>
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

		</div>
	)
}

export default Home;
