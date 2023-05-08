import ReactPlayer from 'react-player/youtube';
import {
    Container,
    AspectRatio,
    SimpleGrid,
    Heading,
    Stack,
    Card,
    CardBody,
    useColorModeValue,
} from '@chakra-ui/react';
import FeaturedBar from './featured-section/FeatureBar';
import { useRef } from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import dynamic from 'next/dynamic';
import BackButton from './humour-section/Back';

const Videos = () => {
    const videoRef = useRef();

    const ReactPlayer = dynamic(() => import('react-player/youtube'), {
        ssr: false,
    });

    const mainScreen = 'https://www.youtube.com/embed/QhBnZ6NPOY0';

    const videoArray = [
        {
            url: 'https://youtu.be/2Z4m4lnjxkY',
            title: 'Lorem Ipsum',
        },
        {
            url: 'https://youtu.be/anZtoPo2Fpw',
            title: 'Lorem Ipsum',
        },
        {
            url: 'https://youtu.be/5mpqhtK0NuU?list=PLCg4BmjNch8hKt_6BzvThMe-njUhFEM02',
            title: 'Lorem Ipsum',
        },
        {
            url: 'https://www.youtube.com/embed/QhBnZ6NPOY0',
            title: 'Lorem Ipsum',
        },
    ];

    const renderCards = () => {
        return videoArray.map((video, index) => (
            <Card
                key={index}
                my={5}
                maxW={{
                    base: '250px',
                    md: '325px',
                    lg: '400px',
                }}
                rounded={'sm'}
                border={'1px'}
                borderRadius='md'
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
                                url={video.url}
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
                                {video.title}
                            </Heading>
                        </Stack>
                    </Container>
                </CardBody>
            </Card>
        ));
    };

    return (
        <>
            <FeaturedBar />
            <Container>
                <AspectRatio maxW='560px' maxH={320} ratio={1} my={5}>
                    <iframe
                        src={mainScreen}
                        allowFullScreen
                        title='Main Video'
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
                {renderCards()}
            </SimpleGrid>
            <BackButton />
        </>
    );
};

export default Videos;
