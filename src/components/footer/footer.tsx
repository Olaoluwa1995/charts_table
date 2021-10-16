import { Box, Flex, Image } from "@chakra-ui/react";
import Logo from "../../assets/logo.png";
import { COLORS } from "../../styles/theme";
import FooterColumn from "./footer-column";
import {
  appFeatures,
  company,
  help,
  Social,
  socials,
  transparency,
} from "./footer-data";

function Footer() {
  return (
    <Flex
      flexDir="column"
      bgColor="#ECEBEB"
      minH={{ base: "30rem", md: "35rem" }}
      width="100%"
      py="5%"
      px={{ base: "5%", sm: "10%" }}
      justify="space-between"
    >
      <Flex
        flexDir={{ base: "column", sm: "row" }}
        w="100%"
        justify="space-between"
      >
        <Image
          mb={{ base: "3rem", sm: "0" }}
          w={{ base: "30%", sm: "15%" }}
          src={Logo}
          h={{ base: "2.5rem", sm: "2rem", md: "2.5rem" }}
        />
        <Flex
          w={{ base: "100%", sm: "80%", md: "70%" }}
          justify="space-between"
        >
          <FooterColumn title="Features" list={appFeatures} />
          <FooterColumn title="Company" list={company} />
          <FooterColumn title="Help" list={help} />
          <FooterColumn title="Transparency" list={transparency} />
        </Flex>
      </Flex>
      <Flex mt="3rem" w="100%">
        <Flex w="50%" flexDir="column" align="flex-start">
          <Box mb="0.8rem" fontSize="xs" fontWeight="medium">
            Contact
          </Box>
          <Box mb="3rem" fontSize="xx-small">
            support@paymyrent.ng
          </Box>
          <Flex>
            {socials.map((social: Social) => (
              <Image
                mr="0.5rem"
                key={social.key}
                h="2rem"
                w="2rem"
                src={social.image}
              />
            ))}
          </Flex>
        </Flex>
        <Flex flexDir="column" align="flex-start">
          <Box mb="0.3rem" fontSize="xs" fontWeight="medium">
            Address
          </Box>
          <Box lineHeight="1.5rem" fontSize="xx-small" textAlign="start">
            37, Akin- Osiyemi Street,
            <br />
            Allen-Avenue,
            <br />
            Ikeja,
            <br />
            Lagos State
          </Box>
        </Flex>
      </Flex>
      <Flex
        fontSize={{ base: "xx-small", sm: "xs" }}
        justify="center"
        textAlign="center"
        mt="3rem"
        px={{ base: "10%", md: "20%" }}
      >
        Paymyrent.ng is a product of Confidence Micro Finanace Bank which is
        regulated by the Central Bank of Nigeria. Depositor’s fund is insured by
        NDIC. Our investment professionals ivest savers funds in finanncial
        instruments and manage the investments to ensure optimum return.
      </Flex>
      <Flex mt="3rem" flexDir="column" justify="center">
        <Box fontSize="xx-small" fontWeight="semibold">
          Copyright&copy;2021 Paymyrent
        </Box>
        <Box fontWeight="semibold" fontSize="xx-small">
          Powered By:{" "}
          <Box color={COLORS.PRIMARY_COLOR} as="span">
            Confidence Micro Finanace Bank.
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Footer;
