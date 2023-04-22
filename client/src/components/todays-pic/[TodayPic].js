// import React from "react";
import {
  Card,
  CardBody,
  Image,
  Heading,
  Flex,
  Spacer,
  NextLink,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function TodayPic() {
  return (
   <>
      <SimpleGrid
        templateColumns="repeat(auto-fill, minmax(600px, 1fr))"
        ml={{ base: "20", sm: "10", md: "3", lg: "20" }}
        mt={{ base: "10", md: "10" }}
        align="center"
        spacing="40px"
      >
        <Card
          variant="outline"
          maxW={{
            base: "500px",
          }}
          spacing="3"
        >
          <CardBody>
            <Image
              src="../fruit.png"
              alt="Eventbrite display"
              borderRadius="lg"
            />
          </CardBody>
        </Card>

        {/* Second Card */}
        <Card
          variant="outline"
          maxW={{
            base: "500px",
          }}
          spacing="3"
        >
          <CardBody>
            <Image src="../turtle.png" alt="Turtle" borderRadius="lg" />
          </CardBody>
        </Card>

        {/* Third Card */}
        <Card
          variant="outline"
          maxW={{
            base: "500px",
          }}
          spacing="3"
        >
          <CardBody>
            <Image src="../shutdown.png" alt="Shutdown" borderRadius="lg" />
          </CardBody>
        </Card>
      </SimpleGrid>

      {/* Arrow to see more events */}
      <Flex mt={5} mb={5}>
        <Spacer />
        <Link href="/allHumour/humour" as={NextLink}>
          <Heading as="h2" size="lg" mr="100">
            more laughs
            <ArrowForwardIcon boxSize={8} ml="5" />
          </Heading>
        </Link>
      </Flex>
      </>
  );
}

export default TodayPic;
