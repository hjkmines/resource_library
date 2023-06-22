import React from 'react';
import ReactPlayer from 'react-player/youtube';
import {
    Container,
    AspectRatio,
    Card,
    CardBody,
    Stack,
    Heading,
    Link,
    Grid,
    useColorModeValue,
    Flex,
    Spacer,
    Box,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import dynamic from 'next/dynamic';

const FeaturedVideos = ({ videos }) => {
    const ReactPlayer = dynamic(() => import('react-player/youtube'), {
        ssr: false,
    });

    return (
        <>
        <Flex justifyContent="center" alignItems="center" width="100%" padding={10}>
           
                <Grid
                    templateColumns={{ 
                        base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }} 
                        gap={10}
                >
                    {videos.map((video, index) => (
                        <Card
                            key={index}
                            my={5}
                            maxW={{
                                base: '250px',
                                md: '325px',
                                lg: '400px',
                            }}
                            borderRadius="md"
                            border={'1px'}
                            borderColor='black'
                            boxShadow={useColorModeValue(
                                '6px 6px 0 black',
                                '6px 6px 0 cyan'
                            )}
                        >
                            <CardBody padding={3}>
                                <Container maxWidth='600px'>
                                    <AspectRatio ratio={4 / 3}>
                                        <ReactPlayer
                                            url={video.resourceLink}
                                            width='100%'
                                            height='100%'
                                            controls={false}
                                            volume={0}
                                            muted={true}
                                            playing={false}
                                            fallback='Loading...'
                                        />
                                    </AspectRatio>
                                    <Stack mt='3' >
                                        <Heading 
                                        size={{ base: 'sm', md: 'sm', lg: 'sm', xl: 'md' }}
                                        letterSpacing={2}
                                        textAlign={'center'}
                                        >
                                            {video.title}
                                        </Heading>
                                    </Stack>
                                </Container>
                            </CardBody>
                        </Card>
                    ))}
                </Grid>
      
        </Flex>
        <Flex mt={5}>
            <Spacer />
            <Link href='/allVideos/videos'>
                <Heading as='h2' size='md' mr='100' color="#42413B">
                    see all videos
                    <ArrowForwardIcon boxSize={8} ml='5' />
                </Heading>
            </Link>
        </Flex>
        </>
    );
};

export default FeaturedVideos;
