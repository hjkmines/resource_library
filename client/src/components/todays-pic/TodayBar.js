import React from "react";
import { Text, Flex } from "@chakra-ui/react";
import TitleDivider from "../TitleDivider";

function TodayBar() {
  return (
    <>
      <Flex align="center" justify="space-around" m={5}>
        <TitleDivider />
        <Text
          style={{ letterSpacing: 5, wordWrap: "break-word" }}
          fontSize={["sm", "md", "lg", "xl"]}
          color="gray.400"
        >
          Today's Pic
        </Text>
        <TitleDivider />
      </Flex>
    </>
  );
}

export default TodayBar;
