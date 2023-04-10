import { Box, Divider, Flex, Heading, Hide, Show, Text, useBreakpointValue, IconButton } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import {useState} from "react";

const settings = {
	dots: true,
	arrows: false,
	fade: true,
	infinite: true,
	autoplay: true,
	speed: 500,
	autoplaySpeed: 5000,
	slidesToShow: 1,
	slidesToScroll: 1,
};

const Humour = () => {
	const [slider, setSlider] = useState(null);

	// These are the breakpoints which changes the position of the
	// buttons as the screen size changes
	const top = useBreakpointValue({ base: '90%', md: '50%' });
	const side = useBreakpointValue({ base: '30%', md: '10px' });

	// These are the images used in the slide
	const cards = [
		'https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
		'https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
		'https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
	];


	return (
		<>
			<Box align='center' marginTop={20}>
				<Heading
					fontSize={['2xl', '3xl', '4xl', '4xl']}
					as='b'
					style={{ letterSpacing: 25, textTransform: 'uppercase' }}
					alignItems='center'
					ml={7}
				>
					Humour
				</Heading>
			</Box>
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
					More Laughs
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
			<Box
				position={'relative'}
				height={'337px'}
				width={'full'}
				marginTop={5}
				overflow={'hidden'}>
				<link
					rel="stylesheet"
					type="text/css"
					charSet="UTF-8"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
				/>
				{/* Left Icon */}
				<IconButton
					aria-label="left-arrow"
					colorScheme="messenger"
					borderRadius="full"
					position="absolute"
					left={side}
					top={top}
					transform={'translate(0%, -50%)'}
					zIndex={2}
					onClick={() => slider?.slickPrev()}>
					<BiLeftArrowAlt />
				</IconButton>
				{/* Right Icon */}
				<IconButton
					aria-label="right-arrow"
					colorScheme="messenger"
					borderRadius="full"
					position="absolute"
					right={side}
					top={top}
					transform={'translate(0%, -50%)'}
					zIndex={2}
					onClick={() => slider?.slickNext()}>
					<BiRightArrowAlt />
				</IconButton>
				{/* Slider */}
				<Slider {...settings} ref={(slider) => setSlider(slider)}>
					{cards.map((url, index) => (
						<Box
							key={index}
							height={'6xl'}
							position="relative"
							backgroundPosition="center"
							backgroundRepeat="no-repeat"
							backgroundSize="cover"
							backgroundImage={`url(${url})`}
						/>
					))}
				</Slider>
			</Box>
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
					Top Rated Humour Today
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
	)
};

export default Humour;