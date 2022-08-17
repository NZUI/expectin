import {
	Box, Container, Text, Flex, Avatar, HStack,
} from '@chakra-ui/react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Pill from '../components/pill/pill';

const Dashboard = () => {
	return (
		<Box bg={'gray.50'}>
			<Header />
			<Container minW={['full', 'full', 'full', 'full', '8xl']} my={'20'} h={'calc(100vh)'}>
				<Flex justifyContent={'space-between'}>
					<Box>
						<Text>Hello!</Text>
						<Text fontSize={'3xl'} fontWeight={'semibold'}>Jane Doe</Text>
					</Box>
					<Box textAlign={'right'}>
						<Text color={'gray.500'}>You are pregnant for</Text>
						<Text fontSize={'3xl'} fontWeight={'semibold'}>27 weeks</Text>
					</Box>
				</Flex>
				<Flex mt={'7'} alignItems={'center'} justifyContent={'space-between'}>
					<Box borderRadius={10} w='45%' minH='200px' bgGradient='linear(to-b, blue.200, pink.300)' p={'10'}>
						<Text fontSize={'3xl'} fontWeight={'semibold'}>2nd Trimester</Text>
						<Text color={'white'} mb={'5'}>27 weeks and 5 days</Text>
						<Flex mt={'16'} color={'white'} alignItems={'center'} justifyContent={'space-between'} overflowX={'auto'}>
							<Text w={'150px'}>Health: On Track</Text>
							<Avatar src='https://bit.ly/kent-c-dodds' size={'xs'} />
							<Avatar src='https://bit.ly/kent-c-dodds' size={'xs'} />
							<Avatar src='https://bit.ly/kent-c-dodds' size={'xs'} />
							<Avatar src='https://bit.ly/kent-c-dodds' size={'xs'} />
							<Avatar src='https://bit.ly/kent-c-dodds' size={'lg'} />
							<Avatar src='https://bit.ly/kent-c-dodds' size={'xs'} />
							<Avatar src='https://bit.ly/kent-c-dodds' size={'xs'} />
							<Avatar src='https://bit.ly/kent-c-dodds' size={'xs'} />
							<Avatar src='https://bit.ly/kent-c-dodds' size={'xs'} />
						</Flex>
					</Box>
					<Box>
						<Flex>
							<Avatar src='https://bit.ly/kent-c-dodds' size={'2xl'} />
							<Box ml={10} textAlign={'right'}>
								<>
									<Text color={'gray.500'} fontSize={12}>Weight (kg)</Text>
									<Text fontWeight={'semibold'} fontSize={'4xl'}>101.97 </Text>
								</>
								<Flex justifyContent={'space-between'} alignItems={'center'} mt={'5'}>
									<Text color={'gray.500'} fontSize={12} mr={10}>Days left</Text>
									<Text fontWeight={'semibold'} fontSize={'2xl'}>112</Text>
								</Flex>
							</Box>
						</Flex>
					</Box>
				</Flex >
				<Box mt={20}>
					<HStack spacing={8} overflowX={'auto'}>
						<Pill active={true} description={'description'} />
						<Pill description={'Self Care'} />
						<Pill description={'Common symptoms'} />
						<Pill description={'Exercises'} />
						<Pill description={'Doctors around'} />
					</HStack>

				</Box>
			</Container >
			<Footer />
		</Box >
	)
}

export default Dashboard;