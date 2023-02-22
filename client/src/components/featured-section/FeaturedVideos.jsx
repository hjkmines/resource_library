import ReactPlayer from 'react-player/youtube';
import {
    Container,
    AspectRatio,
    Card,
    CardBody,
    Stack,
    Heading,
    Text,
    SimpleGrid,
    useColorModeValue,
} from '@chakra-ui/react';

const FeaturedVideos = () => {
    const trailerUrl = [
        'https://www.youtube-nocookie.com/embed/Ixq-y_r-lkE',
        'https://youtu.be/anZtoPo2Fpw',
    ];

    return (
        <SimpleGrid
            templateColumns='repeat(auto-fill, minmax(400px, 1fr))'
            ml={{ base: '0', md: '10', lg: '20' }}
            mt={{ base: '10', md: '10' }}
        >
            <Card
                my={5}
                maxW='sm'
                rounded={'sm'}
                border={'1px'}
                borderColor='black'
                boxShadow={useColorModeValue(
                    '6px 6px 0 black',
                    '6px 6px 0 cyan'
                )}
            >
                <CardBody>
                    <Container maxWidth='400px'>
                        <AspectRatio ratio={4 / 3}>
                            <ReactPlayer
                                url={trailerUrl}
                                width='100%'
                                height='100%'
                                controls={false}
                                volume={0}
                                muted={true}
                                playing={false}
                            />
                        </AspectRatio>
                    </Container>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Dune (mmorpg)</Heading>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Aspernatur facere, alias laudantium
                            voluptatibus ab veniam cum iusto nemo iste delectus
                            repudiandae et deleniti a commodi perferendis
                            molestiae minus nostrum non?
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
            <Card
                my={5}
                maxW='sm'
                rounded={'sm'}
                border={'1px'}
                borderColor='black'
                boxShadow={useColorModeValue(
                    '6px 6px 0 black',
                    '6px 6px 0 cyan'
                )}
            >
                <CardBody>
                    <Container maxWidth='400px'>
                        <AspectRatio ratio={4 / 3}>
                            <ReactPlayer
                                url={trailerUrl}
                                width='100%'
                                height='100%'
                                controls={false}
                                volume={0}
                                muted={true}
                                playing={false}
                            />
                        </AspectRatio>
                    </Container>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Dune (mmorpg)</Heading>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Aspernatur facere, alias laudantium
                            voluptatibus ab veniam cum iusto nemo iste delectus
                            repudiandae et deleniti a commodi perferendis
                            molestiae minus nostrum non?
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
            <Card
                my={5}
                maxW='sm'
                rounded={'sm'}
                border={'1px'}
                borderColor='black'
                boxShadow={useColorModeValue(
                    '6px 6px 0 black',
                    '6px 6px 0 cyan'
                )}
            >
                <CardBody>
                    <Container maxWidth='400px'>
                        <AspectRatio ratio={4 / 3}>
                            <ReactPlayer
                                url={trailerUrl}
                                width='100%'
                                height='100%'
                                controls={false}
                                volume={0}
                                muted={true}
                                playing={false}
                            />
                        </AspectRatio>
                    </Container>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Dune (mmorpg)</Heading>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Aspernatur facere, alias laudantium
                            voluptatibus ab veniam cum iusto nemo iste delectus
                            repudiandae et deleniti a commodi perferendis
                            molestiae minus nostrum non?
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
            <Card
                my={5}
                maxW='sm'
                rounded={'sm'}
                border={'1px'}
                borderColor='black'
                boxShadow={useColorModeValue(
                    '6px 6px 0 black',
                    '6px 6px 0 cyan'
                )}
            >
                <CardBody>
                    <Container maxWidth='400px'>
                        <AspectRatio ratio={4 / 3}>
                            <ReactPlayer
                                url={trailerUrl}
                                width='100%'
                                height='100%'
                                controls={false}
                                volume={0}
                                muted={true}
                                playing={false}
                            />
                        </AspectRatio>
                    </Container>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Dune (mmorpg)</Heading>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Aspernatur facere, alias laudantium
                            voluptatibus ab veniam cum iusto nemo iste delectus
                            repudiandae et deleniti a commodi perferendis
                            molestiae minus nostrum non?
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
        </SimpleGrid>
    );
};

export default FeaturedVideos;
