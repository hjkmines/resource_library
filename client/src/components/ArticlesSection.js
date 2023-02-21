import { Box, Heading, Text, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const ArticlesSection = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setArticles(data);
    };
    fetchArticles();
  }, []);

  return (
    <Box p={4}>
        <Box textAlign='center'>
      <Heading  as="h2" size="xl" mb={4}
      color="#747369"
      fontSize="25px"
      fontWeight="semibold"
      >
        Featured Articles
      </Heading>
      </Box>
      <Stack spacing={4} maxWidth="70%">
        {articles.slice(0,4).map((article) => (
          <Box key={article.id} boxShadow="md" p={4}>
            <Heading as="h3" size="lg" mb={2}
                 color="#747369"
                 fontSize="20px"
                 fontWeight="semibold"
            >
              {article.title}
            </Heading>
            <Text>{article.body}</Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default ArticlesSection;