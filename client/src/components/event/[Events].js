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
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function Events() {
  return (
    <>
      <Flex justifyContent="center" align="center">
        <SimpleGrid
          templateColumns="repeat(2, 1fr)"
          mt={{ base: "5", md: "5" }}
          mb={{ base: "5", md: "5" }}
          align="center"
          spacing="40px"
          mx={{ base: "20px", md: "20px", lg: "40px" }}
        >
          <Card
            overflow="hidden"
            variant="outline"
            maxW={{ base: "600px" }}
            spacing="3"
          >
            <CardBody>
              <Container maxWidth="400px">
                <Stack mt="6" spacing="3" justifyContent="center">
                  <Heading size="md">Eventbrite</Heading>
                  <Link href="/events">
                    INFO SESSION Immersive 8-Week Backend Engineering Bootcamp Q&A w/ Tony Kim
                  </Link>
                  <Text>
                    Q&A Session with Software Engineer, Tony Kim from Southwest Airlines
                  </Text>
                </Stack>
              </Container>
            </CardBody>
            <CardFooter>
              <Image
                src="../eventbrite.png"
                alt="Eventbrite display"
                borderRadius="lg"
                rounded="sm"
                width="100%"
              />
            </CardFooter>
          </Card>

          <Card
            overflow="hidden"
            variant="outline"
            maxW={{ base: "600px" }}
            spacing="3"
          >
            <CardBody>
              <Container maxWidth="400px">
                <Stack mt="6" spacing="3" justifyContent="center">
                  <Heading size="large">YouTube</Heading>
                  <Link href="/events">
                    Every Tech Talk: Episode 8 with Jonathan Waller
                  </Link>
                  <Text>
                    This eighth podcast, I will speak with a bootcamp graduate with a background in rec..
                  </Text>
                </Stack>
              </Container>
            </CardBody>
            <CardFooter>
              <Image
                src="../techtalk.png"
                alt="Youtube thumbnail"
                borderRadius="lg"
                rounded="sm"
                width="100%"
              />
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Flex>

      {/* Arrow to see more events */}
      <Flex mt={5} mb={5}>
        <Spacer />
        <Link href="/allEvents/events" style={{ textDecoration: "none" }}>
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
