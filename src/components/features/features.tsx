import { Box, Flex, Image } from "@chakra-ui/react";
import { COLORS } from "../../styles/theme";
import GrowthImage from "../../assets/growth.png";
import React from "react";
import Aos from "aos";
import { Feature, featuresData } from "./features.data";

function Features() {
  React.useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  return (
    <Flex
      flexDir="column"
      bgColor="white"
      minH={{ base: "20rem", sm: "25rem" }}
      width="100%"
      mt={{ base: "3rem", sm: "0" }}
      px={{ base: "5%", sm: "10%" }}
    >
      {featuresData.map((feature: Feature) => (
        <Flex
          flexDir={
            feature.key === 1 || feature.key === 3
              ? { base: "column", sm: "row" }
              : { base: "column", sm: "row-reverse" }
          }
          key={feature.key}
          w="100%"
          h="100%"
          align={{ base: "center", sm: "none" }}
          justify={{ base: "center", sm: "space-between" }}
          mb="4rem"
        >
          <Flex pos="relative" h="100%" w={{ base: "100%", sm: "40%" }}>
            {feature.overlayImage && (
              <Box
                display={
                  feature.key === 2 ? { base: "none", sm: "flex" } : "flex"
                }
                data-aos="zoom-in"
                data-aos-delay="500"
                pos="absolute"
                h="100%"
                zIndex={2}
              >
                <Image
                  mt={
                    feature.key === 2
                      ? { base: "90%", sm: "75%", md: "100%", lg: "120%" }
                      : "60%"
                  }
                  mb="5rem"
                  src={feature.overlayImage}
                  h={
                    feature.key === 2
                      ? "8rem"
                      : { base: "6rem", sm: "4rem", md: "5rem", lg: "6rem" }
                  }
                  w={feature.key === 2 ? "80%" : "70%"}
                />
              </Box>
            )}

            <Image
              data-aos={
                feature.key === 1 || feature.key === 3
                  ? "slide-right"
                  : "slide-left"
              }
              src={feature.image}
              w="100%"
            />
          </Flex>
          <Flex
            flexDir="column"
            align="flex-start"
            w={{ base: "100%", sm: "55%" }}
            mt="5%"
          >
            <Flex
              bgColor={feature.tagBgColor}
              align="center"
              justify="center"
              w="6rem"
              h="2rem"
              color={feature.tagColor}
              textTransform="uppercase"
              fontWeight="semibold"
              borderRadius="10px"
              fontSize={{ base: "sm", md: "md" }}
            >
              {feature.tag}
            </Flex>
            <Box
              textAlign="start"
              fontSize={{ base: "sm", sm: "md", lg: "lg" }}
              fontWeight="bold"
              mt="5%"
            >
              {feature.title}
            </Box>
            <Box textAlign="start" fontSize={{ base: "sm", md: "sm" }} mt="5%">
              {feature.description}
            </Box>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}

export default Features;
