import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {
	Image, Box,
} from '@chakra-ui/react';

import Header from "./../components/header/header";

const Home = () => {
	return (
		<div>
			<Header />
			<Box h={500}>
				<Carousel>
					<div>
						<Image src='https://bit.ly/dan-abramov' alt='Logo' />
					</div>
					<div>
						<Image src='https://bit.ly/dan-abramov' alt='Logo' />
					</div>
					<div>
						<Image src='https://bit.ly/dan-abramov' alt='Logo' />
					</div>
				</Carousel>
			</Box>

		</div>
	)
}

export default Home;
