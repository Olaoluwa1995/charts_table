import { Box, Flex, Image } from "@chakra-ui/react";
import Aos from "aos";
import React from "react";
import { COLORS } from "../../styles/theme";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

import AppstoreImage from "../../assets/appstore.png";
import PlaystoreImage from "../../assets/playstore.png";
import PhonesImage from "../../assets/phones.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "./testimonial-data";
import Testimonial from "./testimonial";

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Expectations() {
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
        textTransform="uppercase"
        textAlign={{ base: "center", sm: "start" }}
        mb="5%"
      >
        Expectation Met!!!
      </Box>
      <Flex
        flexDir={{ base: "column", sm: "row" }}
        w="100%"
        justify="space-between"
      >
        <Swiper
          spaceBetween={30}
          slidesPerView={2.2}
          speed={5000}
          loop={{
            loopSlides: 2.2,
          }}
          lazy
          autoplay={{ delay: 200, disableOnInteraction: false }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.key}>
              <Testimonial
                name={testimonial.name}
                image={testimonial.image}
                text={testimonial.text}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
      <Box w="100%" mt={{ base: "2rem", md: "4rem" }} pos="relative">
        <Image
          data-aos="slide-up"
          data-aos-delay="1000"
          pos="absolute"
          src={PhonesImage}
          ml={{ base: "35%", sm: "38%", md: "45%", lg: "56%" }}
          h={{ base: "12rem", sm: "15rem", md: "20rem", xl: "25rem" }}
          w="auto"
        />

        <Flex
          bgColor={COLORS.BACKGROUND_COLOR}
          w="100%"
          h={{ base: "8rem", sm: "10rem", md: "12rem", xl: "15rem" }}
          pl={{ base: "5%", md: "8%" }}
          py="2%"
          mt={{ base: "4rem", sm: "5rem", md: "8rem", xl: "10rem" }}
          borderRadius="15px"
        >
          <Flex w="50%" flexDir="column" justify="space-around">
            <Box
              textAlign="start"
              fontSize={{ base: "sm", sm: "md", md: "lg", xl: "2xl" }}
              fontWeight="bold"
              color={COLORS.PRIMARY_COLOR}
            >
              Get the app now
            </Box>
            <Box
              fontSize={{
                base: "xx-small",
                sm: "xs",
                md: "sm",
                lg: "md",
                xl: "lg",
              }}
              textAlign="start"
            >
              It only takes a few minutes to start enjoying free benefits.
            </Box>
            <Flex w="100%">
              <Image
                src={AppstoreImage}
                w={{ base: "4rem", sm: "6rem", md: "auto" }}
                mr="5%"
                h={{ base: "1.2rem", sm: "1.5rem", md: "2rem", xl: "2.5rem" }}
              />
              <Image
                src={PlaystoreImage}
                w={{ base: "4rem", sm: "6rem", md: "auto" }}
                h={{ base: "1.2rem", sm: "1.5rem", md: "2rem", xl: "2.5rem" }}
              />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Expectations;
