import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Item } from "./footer-data";

type Props = {
  title: string;
  list: Item[];
};

const FooterColumn: React.FC<Props> = ({ list, title }) => {
  return (
    <Flex flexDir="column" align="flex-start">
      <Box
        mb="1.5rem"
        fontSize={{ base: "xx-small", sm: "xs" }}
        fontWeight={{ base: "semibold", sm: "medium" }}
      >
        {title}
      </Box>
      {list.map((feature: Item) => (
        <Box
          mb="1.3rem"
          textAlign="start"
          fontSize="xx-small"
          key={feature.key}
        >
          {feature.name}
        </Box>
      ))}
    </Flex>
  );
};

export default FooterColumn;
