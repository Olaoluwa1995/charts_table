import { Box, Flex, Icon } from "@chakra-ui/react";
import { COLORS } from "../../styles/theme";
import { FAQ, faqs } from "./faq-data";
import { MdArrowDropDown, MdArrowRight } from "react-icons/md";
import React from "react";
import Aos from "aos";

function FAQContent() {
  const [id, setId] = React.useState(0);
  const [visible, setVisible] = React.useState(false);
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
      <Box
        fontSize={{ base: "xs", sm: "sm", md: "md", xl: "lg" }}
        fontWeight="semibold"
      >
        Frequently Asked Questions
      </Box>
      <Box
        fontSize={{ base: "xx-small", sm: "xs" }}
        textAlign="start"
        w={{ base: "80%", sm: "70%", md: "60%", lg: "50%" }}
        mt="2%"
      >
        To all questions troubling you, find answers here
      </Box>
      <Flex
        flexDir="column"
        bgColor="white"
        minH="20rem"
        width="100%"
        py={{ base: "6%", md: "3%" }}
        px="5%"
        mt="3rem"
      >
        {faqs.map((faq: FAQ) => (
          <Flex
            data-aos="fade"
            data-aos-delay={(faq.key * 20).toString()}
            w="100%"
            key={faq.key}
            flexDir="column"
          >
            <Flex
              onClick={() => {
                setVisible(!visible);
                setId(faq.key);
              }}
              w="100%"
              align="center"
              justify="space-between"
            >
              <Box
                fontSize={{ base: "xx-small", md: "xs" }}
                fontWeight="medium"
                my={{ base: "4%", md: "3%", lg: "2%" }}
                w="90%"
              >
                {faq.question}
              </Box>
              <Flex w="10%">
                <Icon
                  as={faq.key === id ? MdArrowDropDown : MdArrowRight}
                  w={{ base: "1rem", md: "1.5rem" }}
                  h={{ base: "1rem", md: "1.5rem" }}
                />
              </Flex>
            </Flex>
            {faq.key === id && (
              <Box
                data-aos="fade-in"
                fontWeight={{ base: "hairline", md: "light" }}
                fontSize="xx-small"
                w="90%"
              >
                {faq.answer}
              </Box>
            )}
          </Flex>
        ))}
      </Flex>
      <Flex flexDir="column" mt="3rem" w="100%" justify="space-between">
        <Box
          fontSize={{ base: "xs", sm: "sm", md: "md", xl: "lg" }}
          fontWeight="semibold"
        >
          Didn’t see your question?
        </Box>
        <Flex
          data-aos="zoom-in"
          mt="1rem"
          fontWeight="semibold"
          justify="center"
          align="center"
          bgColor="rgba(249, 0, 0, 0.41)"
          fontSize="xx-small"
          color="white"
          h="3rem"
          w="8rem"
          borderRadius="7px"
        >
          Visit our Help center
        </Flex>
      </Flex>
    </Flex>
  );
}

export default FAQContent;
