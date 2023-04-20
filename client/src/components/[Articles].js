"use client"

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
import { useState, useEffect } from "react";

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:5001/media");
  const data = await res.json();

const query = context.query;
console.log(query)

  return {
    props: {
    data: data,
    },
  };
};

const Articles = ( {data}) => {
//   const [title, setTitle] = useState("");

//   useEffect(() => {
//     async function fetchData() {
//       const res = await fetch("http://localhost:5001/media");
//    const data = await res.json();
//    setTitle(data)
//     }
//     fetchData();

//   }, [])
 
  
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
          {data?.map((article) => {
            <h2 key={article._id} boxShadow="md" p={2}>
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
                {article.description} comments 
              </Text>
            </h2>
      })}
        </Stack>
      </Box>
comments
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