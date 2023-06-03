import React, { useState, useEffect } from 'react';
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
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import BackButton from '../components/helpers/Back';


const Videos = () => {
  const [mediaList, setMediaList] = useState([]);

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    const response = await fetch('http://localhost:5001/media/');
    const data = await response.json();
    setMediaList(data.media);
    console.log(data)
  };

  const renderCards = () => {
    if (!Array.isArray(mediaList)) {
      return null;
    }

    return mediaList
      .filter((media) => media.mediaCategory === 'Video')
      .map((video, index) => {
        console.log(video.description);

        return (
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
            borderRadius="md"
            borderColor="black"
            boxShadow={useColorModeValue(
              '6px 6px 0 black',
              '6px 6px 0 cyan'
            )}
          >
            <CardBody>
              <Container maxWidth="400px">
                <AspectRatio ratio={4 / 3}>
                  <ReactPlayer
                    url={video.description}
                    width="100%"
                    height="100%"
                    controls={false}
                    volume={0}
                    muted={true}
                    playing={false}
                    fallback="Loading..."
                  />
                </AspectRatio>
                <Stack mt="6" spacing="3">
                  <Heading size="md" letterSpacing={3}>
                    {video.title}
                  </Heading>
                </Stack>
              </Container>
            </CardBody>
          </Card>)
      });
  };

  return (
    <>
      <FeaturedBar />
      <SimpleGrid
        templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
        ml={{ base: '20', sm: '10', md: '3', lg: '20' }}
        mt={{ base: '10', md: '10' }}
        align="center"
      >
        {renderCards()}
      </SimpleGrid>
      <Flex mt={5}>
        <Spacer />
        <Link href="/">
          <Heading as="h2" size="lg" mr="100">
            Back
            <ArrowForwardIcon boxSize={8} ml="5" />
          </Heading>
        </Link>
      </Flex>
    </>
  );
};

export default Videos;

