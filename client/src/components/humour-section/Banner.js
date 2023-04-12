import { Flex, Image, Text, Button, HStack } from "@chakra-ui/react";
import {
	Carousel,
	CarouselItem,
	useCarouselItem,
	CarouselItems,
	useCarousel
} from "chakra-framer-carousel";

const memes = [
	"https://ih1.redbubble.net/image.3901328334.5930/mwo,x540,ipad_2_snap-pad,600x600,f8f8f8.jpg",
	"https://www.boredpanda.com/blog/wp-content/uploads/2021/12/2-61ae1e704e406__700.jpg",
	"https://preview.redd.it/programming-memes-v0-upr1vpsljbb91.jpg?width=640&crop=smart&auto=webp&s=12af0a41f8d95c6f099485723da8879d90e7b165",
	"https://codingbootcamps.io/wp-content/uploads/m8.png",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfaBK8CTTSzSKOZJVWEaEzA2gZr0BmIG_kzQ&usqp=CAU",
	"https://64.media.tumblr.com/6bac17adef540fe40e43c8775f2c2b9d/8f3f07d7c69084d5-31/s1280x1920/f8786b234be243226ba6c88f36538a5fd7fec414.jpg",
	"https://gitpiper.com/assets/memes/programming-meme-ff7166d5-d272-4fce-8e30-cef42a514420.webp"
];

function Banner() {
	return (
		<Carousel>
			<CarouselItems>
				{memes.map((image, index) => {
					return (
						<CarouselItem index={index} key={image}>
							<Card index={index} image={image} />
						</CarouselItem>
					);
				})}
			</CarouselItems>
			<Toolbar />
		</Carousel>
	);
}

function Toolbar() {
	const { onNext, onPrevious } = useCarousel();
	return (
		<Flex w="full" justify="center">
			<HStack>
				<Button style={{background: "#FCB22E"}}  w="115px" onClick={onPrevious}>
					Previous
				</Button>
				<Button style={{background: "#FCB22E"}} w="115px" onClick={onNext}>
					Next
				</Button>
			</HStack>
		</Flex>
	);
}

function Card({ image, index }) {
	const { numberOfSlides, onClickHandler, position } = useCarouselItem();
	const isCenter = position === "center";
	return (
		<Flex
			boxSize={isCenter ? "400px" : "300px"}
			pos="relative"
			boxShadow="lg"
			as="button"
			onClick={onClickHandler}
		>
			<Flex
				borderRadius="full"
				bg="whiteAlpha.400"
				p={2}
				left={2}
				top={2}
				position="absolute"
			>
				<Text>{`${index + 1}/${numberOfSlides}`}</Text>
			</Flex>

			<Image
				src={image}
				alt="image"
				boxSize={isCenter ? "400px" : "300px"}
				objectFit="cover"
				objectPosition="center center"
				borderRadius={10}
				_hover={{
					scale: 1.1
				}}
			/>
		</Flex>
	);
}

export default function App() {
	return (
		<Flex
			height="100%"
			width="100%"
			justify="flex-start"
			align="center"
			flexDir="column"
			bg="#F5F5F5"
			p={10}
		>
			<Flex bg="#F5F5F5" w="fit-content" gap="10" flexDir="column">
				<Banner />
			</Flex>
		</Flex>
	);
}
