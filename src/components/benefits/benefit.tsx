import { Box, BoxProps, Flex, Image } from "@chakra-ui/react";
import { BOXSHADOW } from "../../styles/theme";

type Props = {
  image: string;
  title: string;
  description: string;
} & BoxProps;

const Benefit: React.FC<Props> = ({ image, title, description, ...props }) => {
  return (
    <Flex
      flexDir="column"
      w={{ base: "100%", sm: "32%" }}
      minH="6rem"
      p={{ base: "5%", sm: "2%" }}
      bgColor="white"
      mb={{ base: "1rem", sm: "0" }}
      boxShadow={BOXSHADOW}
      {...props}
    >
      <Flex align="center">
        <Image src={image} w="1rem" mr="5%" />
        <Box textAlign="start" fontSize="xs" fontWeight="medium">
          {title}
        </Box>
      </Flex>
      <Box fontSize="xx-small" textAlign="start" mt="1rem">
        {description}
      </Box>
    </Flex>
  );
};

export default Benefit;
