import { Box, Flex, Image } from "@chakra-ui/react";
import ExperienceImage from "../../assets/experience.png";
import LoanImage from "../../assets/loan.png";
import InterestImage from "../../assets/interest.png";
import SaveImage from "../../assets/save.png";
import FlexibilityImage from "../../assets/flexibility.png";
import Benefit from "./benefit";
import React from "react";
import Aos from "aos";

function Benefits() {
  React.useEffect(() => {
    Aos.init({ duration: 500, once: true });
  }, []);
  return (
    <Flex
      flexDir="column"
      bgColor="white"
      minH={{ base: "18rem", sm: "22rem" }}
      width="100%"
      pt="5%"
      mt={{ base: "2rem", md: "7rem" }}
      px={{ base: "5%", sm: "10%" }}
    >
      <Flex
        w="100%"
        flexDir={{ base: "column", sm: "row" }}
        justify="space-between"
      >
        <Benefit
          data-aos="flip-right"
          image={ExperienceImage}
          title="Awesome Experience"
          description="Paymyrent is fast, transparent and easy to use. We show our customers a log of every transaction that occurs on their account."
        />
        <Benefit
          data-aos="flip-right"
          data-aos-delay="500"
          image={LoanImage}
          title="Get Loans"
          description="Paymyrent gives you access to loan. You are entitled to a loan 20% of your total savings."
        />
        <Benefit
          data-aos="flip-right"
          data-aos-delay="1000"
          image={InterestImage}
          title="Interest Per Deposit"
          description="Earn up to 15% interest on your savings. We give you interest on all your savings."
        />
      </Flex>
      <Flex
        w="100%"
        flexDir={{ base: "column", sm: "row" }}
        mt={{ base: "0", sm: "5%" }}
        justify="center"
      >
        <Benefit
          data-aos="flip-right"
          data-aos-delay="500"
          marginRight="2%"
          image={SaveImage}
          title="Quick Save"
          description="Paymyrent does not restrict you to save only on your selected saving date."
        />
        <Benefit
          data-aos="flip-right"
          data-aos-delay="1000"
          image={FlexibilityImage}
          title="Flexibility"
          description="Paymyrent is flexible enough to accommodate however you wish to save. You can choose to save an amount daily, weekly or monthly."
        />
      </Flex>
    </Flex>
  );
}

export default Benefits;
