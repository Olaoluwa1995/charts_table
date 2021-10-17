import { Box, Flex, Image } from "@chakra-ui/react";
import Aos from "aos";
import React from "react";
import StoryImage from "../../../assets/story.png";
import { COLORS } from "../../../styles/theme";

function Story() {
  React.useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <Flex
      flexDir="column"
      bgColor="#FAF8F8"
      minH={{ base: "13rem", sm: "15rem" }}
      width="100%"
      py="5%"
      px={{ base: "5%", sm: "10%" }}
      justify="space-between"
    >
      <Box
        w="100%"
        color={COLORS.PRIMARY_COLOR}
        fontSize="xl"
        fontWeight="semibold"
        textAlign={{ base: "center", sm: "start" }}
        mb="5%"
      >
        MY BEFORE AND AFTER STORY
      </Box>
      <Flex
        flexDir={{ base: "column", sm: "row" }}
        w="100%"
        justify={{ base: "space-between", xl: "normal" }}
      >
        <Image
          data-aos="fade-right"
          data-aos-delay="500"
          src={StoryImage}
          h={{ base: "20rem", sm: "100%", xl: "20rem" }}
          w={{ base: "100%", sm: "45%", lg: "40%" }}
        />
        <Box
          data-aos="fade-left"
          data-aos-delay="500"
          textAlign="start"
          mt={{ base: "5%", sm: "0" }}
          ml={{ base: "0", xl: "5%" }}
          fontSize={{ base: "sm", sm: "xs", md: "sm", lg: "md" }}
          w={{ base: "100%", sm: "50%", xl: "40%" }}
        >
          Before I joined Paymyrent.ng. It was always difficult to sort my rent
          as at when due. Infact, there was a year it was war between my
          landlord and I. I deliberately close late at work because I didn’t
          want to see my Landlady at all. I had consistent headache and high BP.
          A friend recommended Paymyrent to me and honestly, its the best thing
          that happened to me. I have built a very good savings culture and as a
          consistent saver on the platform, have qualified for the Paymyrent
          Mortgage facility. I’m now on a journey to become a Landlord in Lagos.
        </Box>
      </Flex>
    </Flex>
  );
}

export default Story;
