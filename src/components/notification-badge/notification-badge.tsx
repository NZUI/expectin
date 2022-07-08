import { IconButton, Circle, MenuButton } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { FaBell } from 'react-icons/fa';

const NotificationBadge = ({ count }: { count: number }) => {
	return (
		<MenuButton
			css={css`
              position: relative !important;
            `}
			as={IconButton}
			py={'2'}
			aria-label={'Notifications'}
			size={'lg'}
			variant='ghost'
			_hover={{
				bg: 'white',
			}}
			_active={{
				bg: 'white',
			}}
			icon={<>
				<FaBell color={'gray.100'} size={'25px'} />
				<Circle
					color={'white'}
					position={'absolute'}
					top={'6px'}
					right={'1px'}
					fontSize={'0.8rem'}
					bgColor={'blue.600'}
					zIndex={9999}
					size={'20px'}
				>
					{count}
				</Circle>
			</>}
		/>
	);
}

export default NotificationBadge;
