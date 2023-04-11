import { Box, Heading, Text, Stack, Flex, Spacer, Link } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import articlesData from '../articles.json';
import TitleDivider from './TitleDivider';

const ArticlesSection = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(articlesData.articles.slice(0, 4));
  }, []);

  return (
    <Box m={10}>
      <Flex align="center" justify="space-around" m={5} >
        <TitleDivider />
        <Text
          style={{ letterSpacing: 5, wordWrap: "break-word" }}
          fontSize={["sm", "md", "lg", "xl"]}
          color="gray.400"
        >
          Featured Articles
        </Text>
        <TitleDivider />
      </Flex>
      <Stack spacing={2} maxWidth="100%">
        {articles.map((article) => (
          <Box key={article.title} boxShadow="md" p={2}>
            <Heading as="h3" size="lg" mb={2}
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
        <Link href='/articles' color="#42413B" style={{ textDecoration: "none" }}>
          <Heading as='h2' size='md' mr='100' color="#42413B">
            read all articles
            <ArrowForwardIcon boxSize={8} ml='5' color="#42413B" />
          </Heading>
        </Link>
      </Flex>
    </Box>
  );
};

export default ArticlesSection;
