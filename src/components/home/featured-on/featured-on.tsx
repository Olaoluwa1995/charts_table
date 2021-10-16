import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { BOXSHADOW, COLORS } from "../../../styles/theme";
import Aos from "aos";
import { featuredOns, FeaturedOn } from "./featured-on-data";

function AsFeaturedOn() {
  React.useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <Flex
      flexDir="column"
      bgColor={COLORS.BACKGROUND_COLOR}
      minH={{ base: "10rem", sm: "12rem" }}
      width="100%"
      py="5%"
      px={{ base: "5%", sm: "10%" }}
      justify="space-between"
    >
      <Box
        w="100%"
        textTransform="uppercase"
        color={COLORS.PRIMARY_COLOR}
        fontSize="xl"
        fontWeight="semibold"
        textAlign={{ base: "center", sm: "start" }}
        mb="5%"
      >
        AS FEATURED ON
      </Box>
      <Flex flexWrap="wrap" mt={{ base: "0.7rem", md: "1rem" }}>
        {featuredOns.map((featuredOn: FeaturedOn) => {
          return (
            <Box
              key={featuredOn?.key}
              data-aos="fade"
              data-aos-delay={featuredOn?.delay}
              w={{ base: "42%", sm: "29.3%", md: "20%" }}
              mx={{ base: "4%", sm: "2%", md: "2.5%" }}
              h={{ base: "3rem", sm: "3.5rem", md: "4rem" }}
              mb={{ base: "1rem", md: "2rem" }}
              _hover={{
                boxShadow: BOXSHADOW,
              }}
            >
              <Image src={featuredOn.image} alt="" h="100%" w="100%" />
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
}

export default AsFeaturedOn;
