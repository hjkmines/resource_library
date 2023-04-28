import {
  Box,
  Heading,
  Text,
  Stack,
  Flex,
  Spacer,
  Link,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Articles = ({ data }) => {
//   console.log(data);

  return (
    <>
      <Box p={4}>
        <Box textAlign="center">
          <Heading
            as="h2"
            size="xl"
            mb={4}
            color="#747369"
            fontSize="25px"
            fontWeight="semibold"
          >
            Articles
          </Heading>
        </Box>
        <Stack spacing={2} maxWidth="70%">
          {data.map((article) => (
            <Stack key={article._id} boxShadow="md" p={2}>
              <Heading
                as="h4"
                size="lg"
                mb={2}
                color="#747369"
                fontSize="18px"
                fontWeight="semibold"
              >
                {article.title}
              </Heading>
              <Text mt={2} color="gray.500" fontSize="12px">
                {article.description}
              </Text>
            </Stack>
          ))}
        </Stack>
      </Box>

      {/* Go back to Home page */}
      <Flex mt={5}>
        <Spacer />
        <Link href="/">
          <Heading as="h2" size="lg" mr="100">
            Back
            <ArrowForwardIcon boxSize={10} ml="5" />
          </Heading>
        </Link>
      </Flex>
    </>
  );
};

export default Articles;
