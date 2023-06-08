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
  Show,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const cardPics = [
    {
        src: '../fruit.png',
        alt: 'Eventbrite display',
        borderRadius: 'lg',
    },
    {
        src: '../turtle.png',
        alt: 'Turtle',
        borderRadius: 'lg',
    },
    {
        src: '../shutdown.png',
        alt: 'Shutdown',
        borderRadius: 'lg',
    },
    {
        src: '../fruit.png',
        alt: 'Eventbrite display',
        borderRadius: 'lg',
    },
];

function ShowCard() {

    return cardPics.map((card, index) => (
      <Card
            key={index}
            variant='outline'
            maxW={{
                base: '350px',
            }}
            spacing='3'
        >
            <CardBody>
                <Image
                    src={card.src}
                />
            </CardBody>
        </Card>
    ));
}

export default function TodayPic() {
  return (
      <>
          <SimpleGrid
              templateColumns='repeat(auto-fill, minmax(400px, 1fr))'
              ml={{ base: '20', sm: '10', md: '3', lg: '20' }}
              mt={{ base: '10', md: '10' }}
              align='center'
              spacing={2}
          >

          <ShowCard />
          </SimpleGrid>

          {/* Arrow to see more events */}
          <Flex mt={5} mb={5}>
              <Spacer />
              <Link
                  href='/allHumour/humour'
                  as={NextLink}
                  style={{ textDecoration: 'none' }}
              >
                  <Heading as='h2' size='md' mr='100'>
                      more laughs
                      <ArrowForwardIcon boxSize={8} ml='5' color="#42413B" />
                  </Heading>
              </Link>
          </Flex>
      </>
  );
}
