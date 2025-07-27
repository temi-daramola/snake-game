import {Flex, Heading } from "@chakra-ui/react";
import SnakeGame from "../components/Snake-Game";

export const Snake = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      bg="gray.800"
      minH="100vh"
      py="100px"
      // px={4} // padding for mobile spacing
      overflowX="hidden"
    >
      <Heading mb={6} color="white" textAlign="center">
        🐍 Sapa Snake
      </Heading>
      <SnakeGame />
    </Flex>
  );
};
