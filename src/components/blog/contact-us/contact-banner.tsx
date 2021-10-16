import { Box, Flex, Image } from "@chakra-ui/react";
import Aos from "aos";
import React from "react";
import { BOXSHADOW, COLORS } from "../../../styles/theme";
import { Contact, contacts } from "./contact-data";

function ContactBanner() {
  React.useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <Flex
      flexDir="column"
      bgColor={COLORS.BACKGROUND_COLOR}
      minH={{ base: "22rem", sm: "25rem", md: "30rem" }}
      width="100%"
      py="10%"
      mt="3rem"
      px={{ base: "5%", sm: "10%" }}
    >
      <Box fontSize={{ base: "sm", sm: "md" }} fontWeight="semibold">
        Contact Us
      </Box>
      <Box
        fontSize={{ base: "xx-small", sm: "xs" }}
        textAlign="start"
        w={{ base: "80%", sm: "70%", md: "60%", lg: "50%" }}
        mt="2%"
      >
        Need support? Have a question? Running into a problem? <br /> We’re here
        to help.
      </Box>
      <Flex mt="3rem" w="100%" justify="space-between">
        {contacts.map((contact: Contact) => (
          <Flex
            key={contact.key}
            data-aos="slide-left"
            data-aos-delay={contact.delay}
            w="30%"
            px="3%"
            py="3%"
            align="flex-start"
            flexDir="column"
            justify="space-between"
            h="12rem"
            bgColor="white"
            boxShadow={BOXSHADOW}
          >
            <Flex flexDir="column">
              <Image
                src={contact.image}
                h={{ base: "1.5rem", md: "2rem" }}
                w={{ base: "1.5rem", md: "2rem" }}
              />
              <Box
                fontSize={{ base: "xs", md: "sm" }}
                fontWeight="semibold"
                mt="1rem"
              >
                {contact.title}:
              </Box>
            </Flex>
            <Box
              textAlign="start"
              width="80%"
              fontSize={{ base: "xx-small", md: "xs" }}
            >
              {contact.text}
            </Box>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export default ContactBanner;
