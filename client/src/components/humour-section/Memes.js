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
	SimpleGrid,
	Spacer,
	Link,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const memePics = [
	{
		url: "https://qph.cf2.quoracdn.net/main-qimg-0592150d9923e5b59827bf094f0c1c08-lq",
		header: "When you're trying to figure out how to fix a bug",
		comment: "I'm not sure if this is a bug or a feature",
		date: new Date().toLocaleDateString()
	},
	{
		url: "https://qph.cf2.quoracdn.net/main-qimg-114c28c7f35c2ea3c7a84641f677ed5b-lq",
		header: "Very puzzling",
		comment: "I need ChatGPT  in my life",
		date: new Date().toLocaleDateString()
	},
	{
		url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHFTfq0winfOTTTWBZSM2KpNMYUespY_6Z7mU8PpdXKxAw_3KLeIuWMPEFkzByLWOlqn0&usqp=CAU",
		header: "Smacks head on desk",
		comment: "Turning to the Dark Side is imminent!",
		date: new Date().toLocaleDateString()
	},
	{
		url: "https://s3.amazonaws.com/rails-camp-tutorials/blog/programming+memes/programming-or-googling.jpg",
		header: "Imposter Syndrome",
		comment: "Software Engineering at its finest",
		date: new Date().toLocaleDateString()
	},
];

function TopSection() {
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
		</>
	);
};

function MemeCard() {

	return memePics.map((meme, index) => (
			<Center py={10} key={index}>
				<Box
					maxW={'296px'}
					w={'full'}
					bg={'white'}
					boxShadow={'2xl'}
					rounded={'md'}
					p={6}
					overflow={'hidden'}>
					<Box
						h={'256px'}
						bg={'gray.100'}
						mt={-6}
						mx={-6}
						mb={6}
						pos={'relative'}>
						<Image
							src={meme.url}
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
							color={'gray.700'}
							fontSize={'xl'}
							fontFamily={'body'}>
							{meme.header}
						</Heading>
						<Text color={'gray.500'}>
							{meme.comment}
						</Text>
					</Stack>
					<Stack mt={6} direction={'row'} spacing={4} align={'center'}>
						<Avatar
							src={'https://avatars.githubusercontent.com/u/95663147?v=4'}
							alt={'Author'}
						/>
						<Stack direction={'column'} spacing={0} fontSize={'sm'}>
							<Text fontWeight={600}>Thomas Bell</Text>
							<Text color={'gray.500'}>{meme.date}</Text>
						</Stack>
					</Stack>
				</Box>
			</Center>
	));
}

function BackButton() {
	return (
        <>
            <Flex mt={5}>
                <Spacer />
                <Link href='/'>
                    <Heading as='h2' size='lg' mr='100'>
                        Back
                        <ArrowForwardIcon boxSize={8} ml='5' />
                    </Heading>
                </Link>
            </Flex>
        </>
    );
}

export default function MemeData() {
	return (
		<>
			<TopSection />
			<SimpleGrid minChildWidth='120px' spacing={2}>
				<MemeCard />
			</SimpleGrid>
			<BackButton />
		</>
	);
}
