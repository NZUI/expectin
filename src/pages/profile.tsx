import {
	Box, Grid, GridItem, Container, Text, Divider,
} from '@chakra-ui/react';

import Header from './../components/header/header';
import Footer from './../components/footer/footer';

const Profile = () => {
	return (
		<Box>
			<Header />
			<Container minW={['full', 'full', 'full', 'full', '8xl']}>
				<Grid
					my={'10'}
					templateRows='repeat(1, 1fr)'
					templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(5, 1fr)']}
					gap={6}
				>
					<GridItem
						colSpan={[1, 1, 1, 1]}
						rounded={'md'}
						boxShadow={'md'}
						p={'5'}
					>
						<Box
							display={'flex'}
							alignItems={'center'}
						>
							<Text as={'h1'} color={'blue.600'} fontSize={'2xl'} fontWeight={'semibold'}>EXPECTIN</Text>
						</Box>
						<Divider my={'4'} />
						<Box my={'7'}>
							<Text as={'h1'} fontWeight={'semibold'} fontSize={'md'}>Personal Inforamtion</Text>
							<Text mt={'2'} color={'gray.400'} fontSize={'sm'}>
								Complete personal information for the expectant / new mother
							</Text>
						</Box>
						<Box my={'7'}>
							<Text as={'h1'} fontWeight={'semibold'} fontSize={'md'}>Pregnancy Information</Text>
							<Text mt={'2'} color={'gray.400'} fontSize={'sm'}>
								Complete information related to the pregnancy of the expectant / new mother
							</Text>
						</Box>
						<Box my={'7'}>
							<Text as={'h1'} fontWeight={'semibold'} fontSize={'md'}>Account Settings</Text>
							<Text mt={'2'} color={'gray.400'} fontSize={'sm'}>
								Complete the various settings for this account such as password, notifications etc
							</Text>
						</Box>
					</GridItem>
					<GridItem colSpan={[1, 1, 1, 4]} rounded={'md'} boxShadow={'md'} p={'5'}>
						<Text as={'h1'} ml={'5'} fontWeight={'semibold'} fontSize={'4xl'}>Profile</Text>

					</GridItem>
				</Grid>
			</Container>
			<Footer />
		</Box>
	)
}

export default Profile;
