import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Container,
  Text,
  Heading,
  Flex,
  Spacer,
  NextLink,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function Events() {
  return (
    <>
      <SimpleGrid
        templateColumns="repeat(auto-fill, minmax(650px, 1fr))"
        ml={{ base: "20", sm: "10", md: "3", lg: "20" }}
        mt={{ base: "10", md: "10" }}
        align="center"
        spacing='40px'
      >
        <Card
        //   direction={{ base: "column"}}
          overflow="hidden"
          variant="outline"
          maxW={{
            base: '5000px',
          }}
          spacing= "3"
        >
          <CardBody>
          <Container maxWidth='400px'>
            <Stack mt="6" spacing="3">
              <Heading size="md">Eventbrite</Heading>
              <Link href="/events" as={NextLink}>
                INFO SESSION Immersive 8-Week Backend Engineering Bootcamp Q&A
                w/ Tony Kim
              </Link>
              <Text>
                Q&A Session with Software Engineer, Tony Kim from Southwest
                Airlines
              </Text>
            </Stack>
            </Container>
          </CardBody>

          <CardFooter>
            <Image
              src="../eventbrite.png"
              alt="Eventbrite display"
              borderRadius="lg"
              rounded={'sm'}
            />
          </CardFooter>
        </Card>

        {/* Second Card */}
        <Card
        //   direction={{ base: "column" }}
          overflow="hidden"
          variant="outline"
          maxW={{
            base: '5000px',
          }}
          spacing= "3"
        >
          <CardBody>
          <Container maxWidth='400px'>
            <Stack mt="6" spacing="3">
              <Heading size="large">YouTube</Heading>
              <Link href="/events" as={NextLink}>
                Every Tech Talk: Episode 8 with Jonathan waller
              </Link>
              <Text >
                This eighth podcast, I will speak with a bootcamp graduate with
                a background in rec..
              </Text>
            </Stack>
            </Container>
          </CardBody>

          <CardFooter>
            <Image
              src="../techtalk.png"
              alt="Youtube thumbnail"
              borderRadius="lg"
              rounded={'sm'}
            />
          </CardFooter>
        </Card>
      </SimpleGrid>

      {/* Arrow to see more events */}
      <Flex mt={5} mb={5}>
        <Spacer />
        <Link href="/allEvents/events" as={NextLink} style={{ textDecoration: "none" }}>
          <Heading as="h2" size="md" mr="100" color="#42413B">
            check all events
            <ArrowForwardIcon boxSize={8} ml="5" />
          </Heading>
        </Link>
      </Flex>
    </>
  );
}

export default Events;
