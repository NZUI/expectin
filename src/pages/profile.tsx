import {
	Box, Grid, GridItem, Container, Text, Divider, Tabs,
	TabList, Tab, TabPanels, TabPanel, Flex, FormControl,
	FormLabel, Input, Select, Button,
} from '@chakra-ui/react';

import Header from './../components/header/header';
import Footer from './../components/footer/footer';

const Profile = () => {
	return (
		<Box>
			<Header />
			<Container minW={['full', 'full', 'full', 'full', '8xl']} h={'calc(100vh)'}>
				<Tabs defaultIndex={1} mt={'20'}>
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
								<Text as={'h1'} color={'pink.400'} fontSize={'2xl'} fontWeight={'semibold'}>EXPECTIN</Text>
							</Box>
							<Divider my={'4'} />
							<TabList flexDirection={'column'} borderBottomWidth={'0px'} minH={'550px'}>
								<Tab flexDirection={'column'} px={0} my={'2'}>
									<Box textAlign={'left'}>
										<Text fontWeight={'semibold'} fontSize={'md'}>Personal Inforamtion</Text>
										<Text mt={'2'} color={'gray.400'} fontSize={'sm'}>
											Complete personal information for the expectant / new mother
										</Text>
									</Box>
								</Tab>
								<Tab flexDirection={'column'} px={0} my={'2'}>
									<Box textAlign={'left'}>
										<Text as={'h1'} fontWeight={'semibold'} fontSize={'md'}>Pregnancy Information</Text>
										<Text mt={'2'} color={'gray.400'} fontSize={'sm'}>
											Complete information related to the pregnancy of the expectant / new mother
										</Text>
									</Box>
								</Tab>
								<Tab flexDirection={'column'} px={0} my={'2'}>
									<Box textAlign={'left'}>
										<Text as={'h1'} fontWeight={'semibold'} fontSize={'md'}>Account Settings</Text>
										<Text mt={'2'} color={'gray.400'} fontSize={'sm'}>
											Complete the various settings for this account such as password, notifications etc
										</Text>
									</Box>
								</Tab>
							</TabList>
						</GridItem>
						<GridItem colSpan={[1, 1, 1, 4]} rounded={'md'} boxShadow={'md'} px={'5'}>
							<TabPanels>

								<TabPanel>
									<Text as={'h1'} fontWeight={'semibold'} fontSize={'3xl'}>Personal</Text>
									<Flex mt={'4'} flexDirection={['column', 'column', 'column', 'row']} justifyContent={'space-between'} mb={7}>
										<FormControl isRequired w={['100%', '100%', '100%', '48%']}>
											<FormLabel htmlFor='full-name' mb={2}>First name</FormLabel>
											<Input id='full-name' placeholder='Full name' borderColor={'gray.300'} />
										</FormControl>
										<FormControl isRequired w={['100%', '100%', '100%', '48%']}
											mt={['4', '4', '4', '0']}>
											<FormLabel htmlFor='last-name' mb={2}>Last name</FormLabel>
											<Input id='last-name' placeholder='Last name' borderColor={'gray.300'} />
										</FormControl>
									</Flex>
									<Flex flexDirection={['column', 'column', 'column', 'row']} justifyContent={'space-between'} mb={7} mt={'4'}>
										<FormControl isRequired w={['100%', '100%', '100%', '48%']}>
											<FormLabel htmlFor='email' mb={2}>Email</FormLabel>
											<Input id='email' placeholder='Email' type='email' borderColor={'gray.300'} />
										</FormControl>
										<FormControl isRequired w={['100%', '100%', '100%', '48%']}
											mt={['4', '4', '4', '0']}>
											<FormLabel htmlFor='date-of-birth' mb={2}>Date of Birth</FormLabel>
											<Input
												placeholder="Select Date"
												size="md"
												backgroundColor="#ffffff"
												type="date"
												borderColor={'gray.300'}
											/>
										</FormControl>
									</Flex>
									<Flex flexDirection={['column', 'column', 'column', 'row']} justifyContent={'space-between'} mb={7} mt={'4'}>
										<FormControl mb={2} w={['100%', '100%', '100%', '48%']}>
											<FormLabel htmlFor='country' mb={2}>Country</FormLabel>
											<Select placeholder='Select country'>
												<option value='cameroon'>Cameroon</option>
												<option value='nigeria'>Nigeria</option>
												<option value='chad'>Chad</option>
												<option value='chad'>United States</option>
												<option value='chad'>France</option>
											</Select>
										</FormControl>
										<FormControl w={['100%', '100%', '100%', '48%']} mt={['4', '4', '4', '0']}>
											<FormLabel htmlFor='city' mb={2}>City</FormLabel>
											<Input id='city' placeholder='City' borderColor={'gray.300'} />
										</FormControl>
									</Flex>
									<Button
										bg={'pink.400'}
										color={'white'}
										my={'5'}
										size='md'
										borderColor={'pink.400'}
										w={['full', 'full', 'full', 'full', '40%']} ml={['0', '0', '0', '0', '30%']}
										_hover={{
											borderWidth: 1,
											color: 'pink.400',
											backgroundColor: '#ffffff'
										}}
									>
										Update
									</Button>
								</TabPanel>

								<TabPanel>
									<Text as={'h1'} fontWeight={'semibold'} fontSize={'3xl'}>Pregnancy</Text>
									<Text fontSize={13} mt={'2'} mb={'5'}>This section sets up your personal journey in order to receive only information related to your current stage. In addition to that, you will be shown organizations who are targeting ladies in this particular stage</Text>
									<Box>
										<Flex mt={'4'} flexDirection={['column', 'column', 'column', 'row']} justifyContent={'space-between'} mb={7}>
											<FormControl isRequired w={['100%', '100%', '100%', '48%']}>
												<FormLabel mb={2}>How far along are you</FormLabel>
												<Input borderColor={'gray.300'} />
											</FormControl>
											<FormControl isRequired w={['100%', '100%', '100%', '48%']}
												mt={['4', '4', '4', '0']}>
												<FormLabel mb={2}>Unit</FormLabel>
												<Select placeholder='Select unit'>
													<option value='day'>Days</option>
													<option value='month'>Month(s)</option>
													<option value='year'>Year(s)</option>
												</Select>
											</FormControl>
										</Flex>
										<Flex mt={'4'} flexDirection={['column', 'column', 'column', 'row']} justifyContent={'space-between'} mb={7}>
											<FormControl w={['100%', '100%', '100%', '48%']}>
												<FormLabel mb={2}>Emergency contact Number</FormLabel>
												<Input borderColor={'gray.300'} type={'number'} />
											</FormControl>
											<FormControl w={['100%', '100%', '100%', '48%']}
												mt={['4', '4', '4', '0']}>
												<FormLabel mb={2}>Relation (How is the contact related to the expectant)</FormLabel>
												<Input borderColor={'gray.300'} />
											</FormControl>
										</Flex>
										<Flex mt={'4'} flexDirection={['column', 'column', 'column', 'row']} justifyContent={'space-between'} mb={7}>
											<FormControl isRequired w={['100%', '100%', '100%', '48%']}>
												<FormLabel mb={2}>Have you been pregnant prior to this pregnancy</FormLabel>
												<Select placeholder='Select unit'>
													<option value='yes'>Yes</option>
													<option value='no'>No</option>
												</Select>
											</FormControl>
											<FormControl isRequired w={['100%', '100%', '100%', '48%']}
												mt={['4', '4', '4', '0']}>
												<FormLabel mb={2}>How many kids do you currently have?</FormLabel>
												<Input borderColor={'gray.300'} type={'number'} />
											</FormControl>
										</Flex>
										<Button
											bg={'pink.400'}
											color={'white'}
											my={'5'}
											size='md'
											borderColor={'pink.400'}
											w={['full', 'full', 'full', 'full', '40%']} ml={['0', '0', '0', '0', '30%']}
											_hover={{
												borderWidth: 1,
												color: 'pink.400',
												backgroundColor: '#ffffff'
											}}
										>
											Save
										</Button>
									</Box>
								</TabPanel>
								<TabPanel>
									<Text as={'h1'} fontWeight={'semibold'} fontSize={'3xl'}>Account</Text>
								</TabPanel>
							</TabPanels>
						</GridItem>
					</Grid>
				</Tabs>
			</Container>
			<Footer />
		</Box>
	)
}

export default Profile;
