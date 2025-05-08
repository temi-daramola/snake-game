import { Text as ChakraText } from "@chakra-ui/react";
import React from "react";

export const Text = ({ laptopSize = "16px", ...props }) => {
  return (
    <ChakraText
      fontSize={{
        base: "15.8px",  // Mobile (fixed)
        md: "16px",    // Tablet (fixed)
        lg: laptopSize, // Laptop (customizable via prop)
        xl: `clamp(${laptopSize}, 2vw, 20px)`, // Large screens (scales dynamically)
        // xl: `clamp(${laptopSize}, 1.5vw, 30px)`, // Large screens (scales dynamically)
      }}
      {...props} // Allows passing other Chakra props
    />
  );
};
