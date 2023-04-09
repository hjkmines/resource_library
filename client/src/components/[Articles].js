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

export const getStaticProps = async () => {
  const res = await fetch("/articles");
  const data = await res.json();

  return {
    props: { articles: data },
  };
};

const Articles = ({ articles }) => {
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
            Featured Articles
          </Heading>
        </Box>
        <Stack spacing={2} maxWidth="70%">
          {articles?.map((article) => (
            <Box key={article.title} boxShadow="md" p={2}>
              <Heading
                as="h3"
                size="lg"
                mb={2}
                color="#747369"
                fontSize="18px"
                fontWeight="semibold"
              >
                {article.title}
              </Heading>
              <Text mt={2} color="gray.500" fontSize="12px">
                {article.comments} comments | {article.time}
              </Text>
            </Box>
          ))}
        </Stack>
        <Flex mt={5}>
          <Spacer />
          <Link
            href="/allArticles/articles"
            color="#42413B"
            style={{ textDecoration: "none" }}
          >
            <Heading as="h2" size="md" mr="100" color="#42413B">
              read all articles
              <ArrowForwardIcon boxSize={6} ml="5" color="#42413B" />
            </Heading>
          </Link>
        </Flex>
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
