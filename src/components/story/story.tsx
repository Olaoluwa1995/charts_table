import { Box, Flex, Image } from "@chakra-ui/react";
import StoryImage from "../../assets/story.png";
import { COLORS } from "../../styles/theme";

function Story() {
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
        textAlign="start"
        mb="5%"
      >
        MY BEFORE AND AFTER STORY
      </Box>
      <Flex w="100%" justify="space-between">
        <Image src={StoryImage} h="100%" w="40%" />
        <Box textAlign="justify" fontSize="md" w="50%">
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
