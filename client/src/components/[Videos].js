import React, { useEffect, useState } from 'react';
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
  Center,
} from '@chakra-ui/react';
import FeaturedBar from '@/components/featured-section/FeatureBar';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const Videos = ({ allVideos }) => {
  const [renderedVideos, setRenderedVideos] = useState([]);

  useEffect(() => {
    setRenderedVideos(allVideos);
  }, [allVideos]);

  const renderCards = () => {
    if (!Array.isArray(renderedVideos)) {
      return null;
    }

    return renderedVideos.map((video, index) => (
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
              <Center>
                <ReactPlayer
                  url={video.resourceLink}
                  width="100%"
                  height="100%"
                  controls={false}
                  volume={0}
                  muted={true}
                  playing={false}
                  fallback="Loading..."
                />
              </Center>
            </AspectRatio>
            <Stack mt="6" spacing="3">
              <Heading size="md" letterSpacing={3}>
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
      <SimpleGrid
        templateColumns="repeat(3, 1fr)" // Update this line
        ml={{ base: '20', sm: '10', md: '3', lg: '20' }}
        mt={{ base: '10', md: '10' }}
        align="center"
        spacing={3}
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
