import { Box, Heading, Text, Stack, Flex, Spacer, Link} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import articlesData from '../articles.json';

const ArticlesSection = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(articlesData.articles.slice(0, 4));
  }, []);

  return (
    <Box p={4}>
      <Box textAlign='center'>
        <Heading as="h2" size="xl" mb={4}
          color="#747369"
          fontSize="25px"
          fontWeight="semibold"
        >
          Featured Articles
        </Heading>
      </Box>
      <Stack spacing={2} maxWidth="70%">
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
                <Link href='/articles' color="#42413B" style={{textDecoration:"none"}}>
                    <Heading as='h2' size='md' mr='100' color="#42413B">
                        read all articles
                        <ArrowForwardIcon boxSize={6} ml='5' color="#42413B"/>
                    </Heading>
                </Link>
            </Flex>
    </Box>
  );
};

export default ArticlesSection;
