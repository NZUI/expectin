import React from 'react';
import {
	Stack, Image, Container, HStack, Text, Box, useMediaQuery, useDisclosure,
	Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, IconButton,
	DrawerCloseButton, VStack,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';

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
							<HStack spacing={10}>
								<Text fontSize={'md'}>Home</Text>
								<Text fontSize={'md'}>Features</Text>
								<Text fontSize={'md'}>About Us</Text>
								<Text fontSize={'md'}>Contact Us</Text>
								<Text fontSize={'md'}>
									<Text as={'span'} ml={20}>Login</Text>
									<Text as={'span'} mx={2}>|</Text>
									<Text as={'span'}>Sign Up</Text>
								</Text>
							</HStack>
					}
				</Stack>
			</Container>


			{/* Mobile Drawer */}
			<Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
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
			</Drawer>
		</Box>
	)
}

export default Header;