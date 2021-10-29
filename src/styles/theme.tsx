import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'irsans';
        font-style: normal;
        font-display: swap;
        src: url('./fonts/irsans.ttf') format('ttf');
      }
      `}
  />
);

export const ChakraRTLProvider: React.FC = ({ children }) => {
  const colors = {
    brand: {
      100: "#333",
    },
  };

  const fonts = {
    heading: "irsans",
    body: "irsans",
  };

  const theme = extendTheme({ colors, direction: "rtl", fonts });

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
