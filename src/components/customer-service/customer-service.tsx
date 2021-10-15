import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import React from "react";
import { COLORS } from "../../styles/theme";
import CustomerServiceImage from "../../assets/customer-service.png";
import Aos from "aos";
import { HiChevronDoubleRight } from "react-icons/hi";

function CustomerService() {
  React.useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <Flex
      flexDir="column"
      bgColor={COLORS.BACKGROUND_COLOR}
      minH={{ base: "13rem", sm: "15rem" }}
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
        We are always ready and happy to help
      </Box>
      <Flex
        flexDir={{ base: "column", sm: "row" }}
        w="100%"
        justify="space-between"
      >
        <Image
          data-aos="fade-right"
          data-aos-delay="1000"
          src={CustomerServiceImage}
          h={{ base: "20rem", sm: "100%" }}
          w={{ base: "100%", sm: "45%" }}
        />
        <Flex flexDir="column" my="auto" w={{ base: "100%", sm: "50%" }}>
          <Box
            data-aos="fade-top"
            data-aos-delay="1000"
            textAlign="start"
            mt={{ base: "5%", sm: "0" }}
            fontSize={{ base: "sm", sm: "xs", md: "sm", lg: "md" }}
          >
            You can chat with us on the app, slide into our DMs, tweet, leave an
            Instagram comment, send an email or call. However you choose to
            reach out, there’ll always be a friendly person there to make your
            life easy.
          </Box>
          <Flex
            mt="5%"
            align="center"
            data-aos="fade-bottom"
            data-aos-delay="1000"
          >
            <Box fontWeight="semibold" fontSize="sm" textDecoration="underline">
              Get Help
            </Box>
            <Icon as={HiChevronDoubleRight} w="1rem" h="1rem" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default CustomerService;
