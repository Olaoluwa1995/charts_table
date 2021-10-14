import { Box, Flex, Image } from "@chakra-ui/react";
import Aos from "aos";
import { COLORS } from "../../styles/theme";
import BannerImage from "../../assets/banner-image.png";
import BannerOverlay from "../../assets/banner-overlay.png";
import CBNImage from "../../assets/cbn.png";
import NDICImage from "../../assets/ndic.png";
import CustomButton from "../custom-button/custom-button.component";
import React from "react";

function Banner() {
  React.useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <Flex position="relative">
      <Flex
        flexDir="row"
        bgColor={COLORS.BACKGROUND_COLOR}
        h={{ base: "22rem", sm: "25rem", md: "30rem" }}
        width="100%"
        pt="5%"
        mt="3rem"
        pl={{ base: "5%", sm: "10%" }}
      >
        <Flex
          justify="space-between"
          w="55%"
          align="flex-start"
          flexDir="column"
          mt="10%"
          mb="5%"
        >
          <Box
            textAlign="start"
            fontSize={{ base: "md", sm: "lg", md: "2xl", lg: "2xl", xl: "3xl" }}
            fontWeight="bold"
            color={COLORS.PRIMARY_COLOR}
          >
            Save a LITTLE something, <br /> Get a BIGGER everything.
          </Box>
          <Box fontSize={{ base: "xs", md: "sm", lg: "md" }} textAlign="start">
            Paymyrent offers savings, loans and investment platforms at easy and
            convenient packages.
          </Box>
          <Flex
            data-aos="slide-right"
            flexDir={{ base: "column", md: "row" }}
            w="100%"
            h="1.2rem"
          >
            <Image
              src={CBNImage}
              w={{ base: "6rem", sm: "8rem", md: "auto" }}
              mr="10%"
              h="100%"
            />
            <Image
              src={NDICImage}
              w={{ base: "6rem", sm: "8rem", md: "auto" }}
              h="100%"
            />
          </Flex>
          <CustomButton>Get Free Account</CustomButton>
        </Flex>
        <Box data-aos="slide-left" w="40%">
          <Image src={BannerImage} w="100%" h="100%" />
        </Box>
      </Flex>
      <Flex
        display={{ base: "none", md: "flex" }}
        w="100%"
        ml={{ base: "38%", md: "47%", lg: "43%", xl: "48%" }}
        mt="28rem"
        position="absolute"
        h="10rem"
        data-aos="flip-down"
        data-aos-delay="1000"
      >
        <Image
          src={BannerOverlay}
          w={{ base: "10rem", sm: "15rem", lg: "20rem" }}
          h="100%"
        />
      </Flex>
    </Flex>
  );
}

export default Banner;
