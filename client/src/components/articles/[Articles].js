import {
  Box,
  Heading,
  Text,
  Stack,
  Flex,
  Button,
  useToast,
  Spacer,
  Badge,
  Link,
} from "@chakra-ui/react";
import { ArrowForwardIcon, CheckIcon, WarningIcon } from "@chakra-ui/icons";

const Articles = ({ allArticles, deleteArticle }) => {

  //Toast notifications
  const toast = useToast();

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:5001/media/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => {
      console.log(r);

      if (!r.ok) {
        setError(json.error);
        toast({
          title: "Item not deleted",
          description: "Please correct the following information",
          duration: 5000,
          isClosable: true,
          status: "error",
          position: "top",
          icon: <WarningIcon />,
        });
      }

      if (r.ok) {
        deleteArticle(id);
        toast({
          title: "Successfully Deleted",
          description: "Article was deleted",
          duration: 5000,
          isClosable: true,
          status: "success",
          position: "top",
          icon: <CheckIcon />,
        });
      }
    })
    .then(navigate("/"));
  };

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
          {allArticles.map((article) => (
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
                <Badge ml="1" colorScheme="green">
                  Media: {article.mediaCategory}
                </Badge>
              </Heading>

              <Link mt={4} color="blue" fontSize="12px">
                {article.resourceLink}
              </Link>

              <Text mt={2} color="gray.500" fontSize="12px">
                {article.description}
              </Text>
              <Button
                mr={1}
                bg="#FCB22E"
                onClick={() => handleDelete(article._id)}
              >
                Delete
              </Button>
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
