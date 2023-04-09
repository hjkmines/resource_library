import ReactPlayer from 'react-player/youtube';
import {
    Container,
    AspectRatio,
    SimpleGrid,
    Heading,
    Stack,
    Card,
    CardBody,
    Flex,
    Spacer,
    useColorModeValue,
} from '@chakra-ui/react';
import FeaturedBar from './featured-section/FeatureBar';
import { useRef } from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Videos = () => {
    const videoRef = useRef();

    const ReactPlayer = dynamic(() => import('react-player/youtube'), {
        ssr: false,
    });

    const mainScreen = 'https://www.youtube.com/embed/QhBnZ6NPOY0';

    const screen1 = '';

    const screen2 = '';

    const screen3 = '';

    const screen4 ='';

    return (
        <>
            <FeaturedBar />
            <Container>
                <AspectRatio maxW='560px' maxH={320} ratio={1} my={5}>
                    <iframe
                        src={mainScreen}
                        type='video/mp4'
                        allowFullScreen
                        fallback='Loading...'
                        ref={videoRef}
                    />
                </AspectRatio>
            </Container>
            <SimpleGrid
                templateColumns='repeat(auto-fill, minmax(400px, 1fr))'
                ml={{ base: '20', sm: '10', md: '3', lg: '20' }}
                mt={{ base: '10', md: '10' }}
                align='center'
            >
                <Card
                    my={5}
                    maxW={{
                        base: '250px',
                        md: '325px',
                        lg: '400px',
                    }}
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
                                    url={screen1}
                                    width='100%'
                                    height='100%'
                                    controls={false}
                                    volume={0}
                                    muted={true}
                                    playing={false}
                                    fallback='Loading...'
                                />
                            </AspectRatio>
                            <Stack mt='6' spacing='3'>
                                <Heading size='md' letterSpacing={3}>
                                    Lorem Ipsum
                                </Heading>
                            </Stack>
                        </Container>
                    </CardBody>
                </Card>
                <Card
                    my={5}
                    maxW={{
                        base: '250px',
                        md: '325px',
                        lg: '400px',
                    }}
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
                                    url={screen2}
                                    width='100%'
                                    height='100%'
                                    controls={false}
                                    volume={0}
                                    muted={true}
                                    playing={false}
                                    fallback='Loading...'
                                />
                            </AspectRatio>
                            <Stack mt='6' spacing='3'>
                                <Heading size='md' letterSpacing={3}>
                                    Lorem Ipsum
                                </Heading>
                            </Stack>
                        </Container>
                    </CardBody>
                </Card>
                <Card
                    my={5}
                    maxW={{
                        base: '250px',
                        md: '325px',
                        lg: '400px',
                    }}
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
                                    url={screen3}
                                    width='100%'
                                    height='100%'
                                    controls={false}
                                    volume={0}
                                    muted={true}
                                    playing={false}
                                    fallback='Loading...'
                                />
                            </AspectRatio>
                            <Stack mt='6' spacing='3'>
                                <Heading size='md' letterSpacing={3}>
                                    Lorem Ipsum
                                </Heading>
                            </Stack>
                        </Container>
                    </CardBody>
                </Card>
                <Card
                    my={5}
                    maxW={{
                        base: '250px',
                        md: '325px',
                        lg: '400px',
                    }}
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
                                    url={screen4}
                                    width='100%'
                                    height='100%'
                                    controls={false}
                                    volume={0}
                                    muted={true}
                                    playing={false}
                                    fallback='Loading...'
                                />
                            </AspectRatio>
                            <Stack mt='6' spacing='3'>
                                <Heading size='md' letterSpacing={3}>
                                    Lorem Ipsum
                                </Heading>
                            </Stack>
                        </Container>
                    </CardBody>
                </Card>
            </SimpleGrid>
            <Flex mt={5}>
                <Spacer />
                <Link href='/'>
                    <Heading as='h2' size='lg' mr='100'>
                        Back
                        <ArrowForwardIcon boxSize={10} ml='5' />
                    </Heading>
                </Link>
            </Flex>
        </>
    );
};

export default Videos;
