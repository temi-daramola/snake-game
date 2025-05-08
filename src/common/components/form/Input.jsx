import { Box, FormLabel, Input as ChakraInput } from "@chakra-ui/react";
import { constants } from "@constants/index";
import React from "react";

export const Input = ({ label, inputProps, ...props }) => {
  return (
    <Box {...props}>
      <FormLabel>{label}</FormLabel>
      <ChakraInput minH="50px" {...inputProps} />
    </Box>
  );
};
