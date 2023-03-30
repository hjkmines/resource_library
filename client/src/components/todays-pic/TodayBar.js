import React from "react";
import { Text, Flex, Hide, Divider } from "@chakra-ui/react";

function TodayBar() {
  return (
    <Flex align="center" justify="space-around" mt={5} ml={10}>
      <Hide below="md">
        <Divider
          orientation="horizontal"
          w={["null", "null", "2xs", "sm", "md", "40em"]}
          justifyContent="baseline"
          borderWidth={1}
          borderColor="black"
        />
      </Hide>
      <Text
        style={{ letterSpacing: 5, wordWrap: "break-word" }}
        fontSize={["sm", "md", "lg", "xl"]}
        color="gray.400"
      >
        Today's Pic
      </Text>
      <Hide below="md">
        <Divider
          orientation="horizontal"
          w={["null", "null", "2xs", "sm", "md", "40em"]}
          justifyContent="baseline"
          borderWidth={1}
          borderColor="black"
        />
      </Hide>
    </Flex>
  );
}

export default TodayBar;
