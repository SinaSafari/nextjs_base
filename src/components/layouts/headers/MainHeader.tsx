import { Box, Button, Container, Flex } from "@chakra-ui/react";
import React from "react";

export const MainHeader = () => {
  return (
    <Container maxW="container.xl" bg="transparent">
      <Flex alignItems="center" justifyContent="space-between" pt="3">
        <Flex justifyContent="start" alignItems="center">
          <Box>لوگو</Box>
        </Flex>
        <Flex justifyContent="end" alignItems="center">
          <Button bg="orange" color="white">
            لاگین
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};
