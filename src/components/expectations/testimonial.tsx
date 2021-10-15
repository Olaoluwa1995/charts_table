import { Box, Flex } from "@chakra-ui/react";
import { BOXSHADOW } from "../../styles/theme";
import React from "react";

type Props = {
  name: string;
  image: string;
  text: string;
};

const Testimonial: React.FC<Props> = ({ name, image, text }) => {
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
      minH={{ base: "4rem", sm: "10rem" }}
      boxShadow={BOXSHADOW}
    >
      <Box h="3rem" fontSize="3xl" fontWeight="bold" color="grey">
        ''
      </Box>
      <Flex ml="4%" h="7rem" flexDir="column" justify="space-between">
        <Box fontSize={{ base: "xx-small", md: "xs" }} textAlign="start">
          ‘’{text}’’
        </Box>
        <Flex w="100%" justify="space-between" align="center">
          <Box
            h="2.5rem"
            w="2.5rem"
            borderRadius="50%"
            backgroundImage={`url(${image})`}
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
          />
          <Box fontSize={{ base: "xx-small", md: "xs" }}>- {name}</Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Testimonial;
