import { Box, Flex, Image } from "@chakra-ui/react";
import { COLORS } from "../../../styles/theme";
import PhonesImage from "../../../assets/phones.png";
import AppstoreImage from "../../../assets/appstore.png";
import PlaystoreImage from "../../../assets/playstore.png";
import React from "react";
import Aos from "aos";

function Download() {
  React.useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <Box w="100%" mt={{ base: "2rem", md: "0rem" }} pos="relative">
      <Image
        data-aos="slide-left"
        data-aos-delay="300"
        pos="absolute"
        src={PhonesImage}
        ml={{ base: "35%", sm: "40%", md: "45%", lg: "56%" }}
        h={{ base: "12rem", sm: "15rem", md: "20rem", xl: "25rem" }}
        w="auto"
      />

      <Flex
        bgColor={COLORS.BACKGROUND_COLOR}
        w="100%"
        h={{ base: "10rem", sm: "15rem", md: "20rem", xl: "25rem" }}
        pl={{ base: "5%", md: "8%" }}
        py="5%"
        mt={{ base: "2rem", sm: "3rem", md: "4rem", xl: "5rem" }}
        borderRadius="15px"
      >
        <Flex w="50%" flexDir="column" justify="space-around">
          <Box
            textAlign="start"
            fontSize={{ base: "xs", sm: "sm", md: "md", xl: "lg" }}
            fontWeight="bold"
          >
            Digital bank made just for you
          </Box>
          <Box
            fontSize={{
              base: "xx-small",
              sm: "xs",
              md: "sm",
              lg: "md",
            }}
            textAlign="start"
          >
            Open a new Paymyrent account from your phone or computer and follow
            the simple on screen steps to register
          </Box>
          <Flex w="100%">
            <Image
              src={AppstoreImage}
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://apps.apple.com/us/app/paymyrent/id1494298883";
              }}
              w={{ base: "4rem", sm: "6rem", md: "auto" }}
              mr="5%"
              h={{ base: "1.2rem", sm: "1.5rem", md: "2rem", xl: "2.5rem" }}
            />
            <Image
              src={PlaystoreImage}
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://play.google.com/store/apps/details?id=com.paymyrentng.paymyrent";
              }}
              w={{ base: "4rem", sm: "6rem", md: "auto" }}
              h={{ base: "1.2rem", sm: "1.5rem", md: "2rem", xl: "2.5rem" }}
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Download;
