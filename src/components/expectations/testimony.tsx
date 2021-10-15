import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { BOXSHADOW } from "../../styles/theme";
import StoryImage from "../../assets/story.png";

function Testimony() {
  return (
    <Flex
      bgColor="#F1EFEF"
      w="100%"
      p="5%"
      m="0.5rem"
      flexDir="column"
      align="flex-start"
      justify="space-between"
      borderRadius="10px"
      minH={{ base: "6rem", sm: "10rem" }}
      boxShadow={BOXSHADOW}
    >
      <Box h="3rem" fontSize="3xl" fontWeight="bold" color="grey">
        ''
      </Box>
      <Flex ml="4%" h="7rem" flexDir="column" justify="space-between">
        <Box fontSize={{ base: "xx-small", md: "xs" }} textAlign="start">
          ‘’Paymyrent has helped me not to worry about money, I know my rent is
          secured and paying other bills has been with ease’’
        </Box>
        <Flex w="100%" justify="space-between" align="center">
          <Box
            h="2rem"
            w="2rem"
            borderRadius="50%"
            backgroundImage={`url(${StoryImage})`}
            backgroundSize="contain"
          />
          <Box fontSize={{ base: "xx-small", md: "xs" }}>
            - Mr. Olakulehin Stephen
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Testimony;
