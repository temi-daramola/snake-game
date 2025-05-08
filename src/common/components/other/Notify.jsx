import { Box, Center, Flex, Heading, Icon, Text } from "@chakra-ui/react";

export const Notify = ({ title, message, icon, children, ...props }) => {
  return (
    <Center>
      <Box textAlign="center" 
      // w="80%" 
      w={{base: "100%", lg: "80%"}}
      {...props}
      >
        <Flex justifyContent="center">
          <Icon as={icon} fontSize={{base: "40px", lg: "50px"}} mb="30px" />
        </Flex>

        <Heading fontWeight="500" fontSize={{base: "30px"}} mb="30px">
          {title}
        </Heading>

        <Text mb={children && "20px"}>{message}</Text>

        {children}
      </Box>
    </Center>
  );
};
