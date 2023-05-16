import {
  Box,
  Heading,
  Text,
  Stack,
  Flex,
  Button,
  useToast,
  Spacer,
  Link,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Articles = ({ allArticles }) => {
  console.log(allArticles);

  //Toast notifications
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const media = { title, description, mediaCategory };

    const response = await fetch("/media", {
      method: "DELETE",
      body: JSON.stringify(media),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      toast({
        title: "Missing information",
        description: "Please correct the following information",
        duration: 5000,
        isClosable: true,
        status: "error",
        position: "top",
        icon: <WarningIcon />,
      });
    }

    if (response.ok) {
      console.log(`Title: ${title} description: ${description}`);
      setTitle();
      setDescription();
      setMediaCategory();
      setError(null);
      toast({
        title: "Successfully Uploaded",
        description: "We received your submission",
        duration: 5000,
        isClosable: true,
        status: "success",
        position: "top",
        icon: <CheckIcon />,
      });
    }
    closeUploadModal();
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
              </Heading>
              <Text mt={2} color="gray.500" fontSize="12px">
                Media: {article.mediaCategory}
              </Text>
              <Text mt={2} color="gray.500" fontSize="12px">
                {article.description}
              </Text>
              <Button mr={1} bg="#FCB22E" onClick={handleSubmit}>
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
