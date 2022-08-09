import React from 'react';
import {
	Stack, Image, Container, HStack, Text, Box, useMediaQuery, useDisclosure,
	Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, IconButton,
	DrawerCloseButton, VStack, Avatar, Menu, MenuButton, MenuItem, MenuList, Divider,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { FiMenu } from 'react-icons/fi';
import { BiUser } from 'react-icons/bi';
import { BiLogOut } from 'react-icons/bi';
import { GrUpgrade } from 'react-icons/gr';

import NotificationBadge from '../notification-badge/notification-badge';

const Header = () => {
	const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box bg='white' boxShadow={'md'} py='2'>
			<Container minW={['full', 'full', 'full', 'full', '8xl']}>
				<Stack direction={'row'} justifyContent='space-between'>
					<Image boxSize='70px' src='https://bit.ly/dan-abramov' alt='Logo' rounded={'full'} />
					{
						isSmallScreen ?
							// Mobile screens
							<IconButton
								variant='ghost'
								aria-label='open menu'
								onClick={onOpen}
								alignSelf={'center'}
								icon={<FiMenu size={30} />}
							/>
							:
							// Desktop screens
							false ?
								<HStack spacing={10}>
									<Text fontSize={'md'}>Home</Text>
									<Text fontSize={'md'}>Features</Text>
									<Text fontSize={'md'}>About Us</Text>
									<Text fontSize={'md'}>Contact Us</Text>
									<Text fontSize={'md'}>
										<Link to={'/login'}>
											<Text as={'span'} ml={20}>Login</Text>
										</Link>
										<Text as={'span'} mx={2}>|</Text>
										<Link to={'/signup'}>
											<Text as={'span'}>Sign Up</Text>
										</Link>
									</Text>
								</HStack>
								:
								<HStack spacing={10}>
									<Menu
										isLazy
										flip={true}
										direction='rtl'
									>
										<NotificationBadge count={5} />
										<MenuList width={'250px'} h={'400px'} overflowY={'auto'}>
											<Text w={'100%'} fontWeight={'semibold'} pl={'3'} mt={'3'}>Notifications</Text>
											<MenuItem borderTopWidth={1}>
												<Box flexDirection={'column'} textAlign={'left'} h={'75px'}>
													<Text fontWeight={'medium'} fontSize={'sm'} overflow={'hidden'} textOverflow={'ellipsis'} noOfLines={1}>
														Lorem ipsum dolor sit amet, consectetur adipiscing
													</Text>
													<Text mt={'1'} color={'gray.400'} fontSize={'sm'} overflow={'hidden'} textOverflow={'ellipsis'} noOfLines={2}>
														Complete information related to the pregnancy of the expectant / new mother
													</Text>
												</Box>
											</MenuItem>
											<MenuItem borderTopWidth={1}>
												<Box flexDirection={'column'} textAlign={'left'} h={'75px'}>
													<Text fontWeight={'medium'} fontSize={'sm'} overflow={'hidden'} textOverflow={'ellipsis'} noOfLines={1}>
														Lorem ipsum dolor sit amet, consectetur adipiscing
													</Text>
													<Text mt={'1'} color={'gray.400'} fontSize={'sm'} overflow={'hidden'} textOverflow={'ellipsis'} noOfLines={2}>
														Complete information related to the pregnancy of the expectant / new mother
													</Text>
												</Box>
											</MenuItem>
											<MenuItem borderTopWidth={1}>
												<Box flexDirection={'column'} textAlign={'left'} h={'75px'}>
													<Text fontWeight={'medium'} fontSize={'sm'} overflow={'hidden'} textOverflow={'ellipsis'} noOfLines={1}>
														Lorem ipsum dolor sit amet, consectetur adipiscing
													</Text>
													<Text mt={'1'} color={'gray.400'} fontSize={'sm'} overflow={'hidden'} textOverflow={'ellipsis'} noOfLines={2}>
														Complete information related to the pregnancy of the expectant / new mother
													</Text>
												</Box>
											</MenuItem>
											<MenuItem borderTopWidth={1}>
												<Box flexDirection={'column'} textAlign={'left'} h={'75px'}>
													<Text fontWeight={'medium'} fontSize={'sm'} overflow={'hidden'} textOverflow={'ellipsis'} noOfLines={1}>
														Lorem ipsum dolor sit amet, consectetur adipiscing
													</Text>
													<Text mt={'1'} color={'gray.400'} fontSize={'sm'} overflow={'hidden'} textOverflow={'ellipsis'} noOfLines={2}>
														Complete information related to the pregnancy of the expectant / new mother
													</Text>
												</Box>
											</MenuItem>
											<MenuItem borderTopWidth={1}>
												<Box flexDirection={'column'} textAlign={'left'} h={'75px'}>
													<Text fontWeight={'medium'} fontSize={'sm'} overflow={'hidden'} textOverflow={'ellipsis'} noOfLines={1}>
														Lorem ipsum dolor sit amet, consectetur adipiscing
													</Text>
													<Text mt={'1'} color={'gray.400'} fontSize={'sm'} overflow={'hidden'} textOverflow={'ellipsis'} noOfLines={2}>
														Complete information related to the pregnancy of the expectant / new mother
													</Text>
												</Box>
											</MenuItem>
											<MenuItem borderTopWidth={1}>
												<Box flexDirection={'column'} textAlign={'left'} h={'75px'}>
													<Text fontWeight={'medium'} fontSize={'sm'} overflow={'hidden'} textOverflow={'ellipsis'} noOfLines={1}>
														Lorem ipsum dolor sit amet, consectetur adipiscing
													</Text>
													<Text mt={'1'} color={'gray.400'} fontSize={'sm'} overflow={'hidden'} textOverflow={'ellipsis'} noOfLines={2}>
														Complete information related to the pregnancy of the expectant / new mother
													</Text>
												</Box>
											</MenuItem>
											<MenuItem borderTopWidth={1}>
												<Box flexDirection={'column'} textAlign={'left'} h={'75px'}>
													<Text fontWeight={'medium'} fontSize={'sm'} overflow={'hidden'} textOverflow={'ellipsis'} noOfLines={1}>
														Lorem ipsum dolor sit amet, consectetur adipiscing
													</Text>
													<Text mt={'1'} color={'gray.400'} fontSize={'sm'} overflow={'hidden'} textOverflow={'ellipsis'} noOfLines={2}>
														Complete information related to the pregnancy of the expectant / new mother
													</Text>
												</Box>
											</MenuItem>
											<Divider />
											<MenuItem><Text textAlign={'center'} w={'100%'}>See All</Text></MenuItem>
										</MenuList>
									</Menu>
									<Menu isLazy flip={true} direction='rtl'>
										<MenuButton>
											<Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
										</MenuButton>
										<MenuList>
											<Link to={'/profile'}>
												<MenuItem icon={<BiUser />}>
													Profile
												</MenuItem>
											</Link>
											<MenuItem icon={<GrUpgrade />}>Upgrade</MenuItem>
											<Divider mt={5} />
											<Link to={'/profile'}>
												<MenuItem icon={<BiLogOut />}>Logout</MenuItem>
											</Link>
										</MenuList>
									</Menu>
								</HStack>
					}
				</Stack>
			</Container >


			{/* Mobile Drawer */}
			< Drawer placement={'top'} onClose={onClose} isOpen={isOpen} >
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader borderBottomWidth='1px' pb={5}>EXPECTIN</DrawerHeader>
					<DrawerBody>
						<VStack spacing={8} alignItems={'start'} py={10}>
							<Text fontSize={'md'}>Home</Text>
							<Text fontSize={'md'}>Features</Text>
							<Text fontSize={'md'}>About Us</Text>
							<Text fontSize={'md'}>Contact Us</Text>
							<Text fontSize={'md'}>
								<Text as={'span'} mt={20}>Login</Text>
								<Text as={'span'} mx={2}>|</Text>
								<Text as={'span'}>Sign Up</Text>
							</Text>
						</VStack>
					</DrawerBody>
				</DrawerContent>
			</Drawer >
		</Box >
	)
}

export default Header;