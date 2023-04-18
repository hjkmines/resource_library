import {
	Box,
	Flex,
	Text,
	Heading,
	Divider,
	Show,
	Hide,
	Center,
	Stack,
	Avatar,
	Image,
	useColorModeValue,
} from '@chakra-ui/react';

const Memes = () => {
	return (
		<>
			<Show below='md'>
				<Box align='center'>
					<Divider
						marginTop={5}
						orientation='horizontal'
						w='2xs'
						borderWidth={1}
						borderColor='black'
					/>
				</Box>
			</Show>
			<Flex align='center' justify='space-around' mt={5}>
				<Hide below='md'>
					<Divider
						orientation='horizontal'
						w={['null', 'null', '2xs', 'sm', 'md', '30em']}
						justifyContent='baseline'
						borderWidth={1}
						borderColor='black'
					/>
				</Hide>
				<Text
					style={{ letterSpacing: 5, wordWrap: 'break-word' }}
					fontSize={['sm', 'md', 'lg', 'xl']}
					color='gray.400'
				>
					Memes Trending Today
				</Text>
				<Hide below='md'>
					<Divider
						orientation='horizontal'
						w={['null', 'null', '2xs', 'sm', 'md', '30em']}
						justifyContent='baseline'
						borderWidth={1}
						borderColor='black'
					/>
				</Hide>
			</Flex>
		{/*	Meme-Start*/}
			<Center py={6}>
				<Box
					maxW={'296px'}
					w={'full'}
					bg={useColorModeValue('white', 'gray.900')}
					boxShadow={'2xl'}
					rounded={'md'}
					p={6}
					overflow={'hidden'}>
					<Box
						h={'210px'}
						bg={'gray.100'}
						mt={-6}
						mx={-6}
						mb={6}
						pos={'relative'}>
						<Image
							src={
								'https://s3.amazonaws.com/rails-camp-tutorials/blog/programming+memes/programming-or-googling.jpg'
							}
							layout={'fill'}
							alt={'image'}
						/>
					</Box>
					<Stack>
						<Text
							color={'green.500'}
							textTransform={'uppercase'}
							fontWeight={800}
							fontSize={'sm'}
							letterSpacing={1.1}>
							Comment:
						</Text>
						<Heading
							color={useColorModeValue('gray.700', 'white')}
							fontSize={'xl'}
							fontFamily={'body'}>
							Things that make you go hrmmm!
						</Heading>
						<Text color={'gray.500'}>
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
							nonumy eirmod tempor invidunt.
						</Text>
					</Stack>
					<Stack mt={6} direction={'row'} spacing={4} align={'center'}>
						<Avatar
							src={'https://avatars.githubusercontent.com/u/95663147?v=4'}
							alt={'Author'}
						/>
						<Stack direction={'column'} spacing={0} fontSize={'sm'}>
							<Text fontWeight={600}>Thomas Bell</Text>
							<Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
						</Stack>
					</Stack>
				</Box>
			</Center>
		{/*	Meme-End*/}
		{/*	<Show below='md'>*/}
		{/*		<Box align='center'>*/}
		{/*			<Divider*/}
		{/*				marginTop={5}*/}
		{/*				orientation='horizontal'*/}
		{/*				w='2xs'*/}
		{/*				borderWidth={1}*/}
		{/*				borderColor='black'*/}
		{/*			/>*/}
		{/*		</Box>*/}
		{/*	</Show>*/}
		{/*	<Flex align='center' justify='space-around' mt={5}>*/}
		{/*		<Hide below='md'>*/}
		{/*			<Divider*/}
		{/*				orientation='horizontal'*/}
		{/*				w={['null', 'null', '2xs', 'sm', 'md', '30em']}*/}
		{/*				justifyContent='baseline'*/}
		{/*				borderWidth={1}*/}
		{/*				borderColor='black'*/}
		{/*			/>*/}
		{/*		</Hide>*/}
		{/*		<Text*/}
		{/*			style={{ letterSpacing: 5, wordWrap: 'break-word' }}*/}
		{/*			fontSize={['sm', 'md', 'lg', 'xl']}*/}
		{/*			color='gray.400'*/}
		{/*		>*/}
		{/*			Memes Recommended For You*/}
		{/*		</Text>*/}
		{/*		<Hide below='md'>*/}
		{/*			<Divider*/}
		{/*				orientation='horizontal'*/}
		{/*				w={['null', 'null', '2xs', 'sm', 'md', '30em']}*/}
		{/*				justifyContent='baseline'*/}
		{/*				borderWidth={1}*/}
		{/*				borderColor='black'*/}
		{/*			/>*/}
		{/*		</Hide>*/}
		{/*	</Flex>*/}
		</>
	);
};

export default Memes;
