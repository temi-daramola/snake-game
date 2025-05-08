import { Box, Center, Flex, Heading, Icon, Text } from "@chakra-ui/react";

export const BaseNotify = ({ title, message, view, children, ...props }) => {
  return (
    <Center>
      <Box textAlign="center" w="80%" {...props}>
        <Flex justifyContent="center" mb="28px">
          {view}
        </Flex>
        <Heading fontWeight="500" mb="15px" fontSize="25px">
          {title}
        </Heading>

        <Text mb={children && "20px"}>{message}</Text>
        {children}
      </Box>
    </Center>
  );
};
