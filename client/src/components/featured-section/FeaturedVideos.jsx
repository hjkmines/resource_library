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
    Flex,
    Spacer,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const FeaturedVideos = () => {
    const ReactPlayer = dynamic(() => import('react-player/youtube'), {
        ssr: false,
    });

    const trailer1 = 'https://www.youtube-nocookie.com/embed/Ixq-y_r-lkE';

    const trailer2 = 'https://youtu.be/2Z4m4lnjxkY';

    const trailer3 = 'https://youtu.be/anZtoPo2Fpw';

    const trailer4 =
        'https://youtu.be/5mpqhtK0NuU?list=PLCg4BmjNch8hKt_6BzvThMe-njUhFEM02';

    return (
        <>
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
                                    url={trailer1}
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
                                    url={trailer2}
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
                                    url={trailer3}
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
                                    url={trailer4}
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
                <Link href='/' as='videos'>
                    <Heading as='h2' size='lg' mr='100'>
                        see all videos
                        <ArrowForwardIcon boxSize={10} ml='5' />
                    </Heading>
                </Link>
            </Flex>
        </>
    );
};

export default FeaturedVideos;
