import { Box, Flex, Image } from "@chakra-ui/react";
import { COLORS } from "../../styles/theme";
import BannerImage from "../../assets/banner-image.png";
import BannerOverlay from "../../assets/banner-overlay.png";
import CustomButton from "../custom-button/custom-button.component";

function Banner() {
  return (
    <Flex position="relative">
      <Flex
        flexDir="row"
        bgColor={COLORS.BACKGROUND_COLOR}
        h={{ base: "20rem", sm: "25rem", md: "30rem" }}
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
          <CustomButton>Get Free Account</CustomButton>
        </Flex>
        <Box w="40%">
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
