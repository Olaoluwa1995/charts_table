import React from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Divider,
  Flex,
  FlexboxProps,
  Icon,
  Image,
  List,
  ListIcon,
  ListItem,
  useDisclosure,
} from "@chakra-ui/react";

import { headerLinksData } from "./header.data";
import { BOXSHADOW, COLORS } from "../../styles/theme";
import NavLinkItem from "../link-item/header-links.component";
import LinkItem from "../link-item/link-item.component";
import Logo from "../../assets/logo.png";
import CustomButton from "../custom-button/custom-button.component";

type HeaderProps = FlexboxProps;

const Header: React.FC<HeaderProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        zIndex={3}
        as="header"
        position="fixed"
        py={{ base: "0.6rem", sm: "0.8rem" }}
        width="100%"
        bgColor="white"
        boxShadow={BOXSHADOW}
      >
        <Flex
          flexDir="row"
          width="100%"
          mx={{ base: "2%", sm: "5%" }}
          align="center"
          justify="space-between"
        >
          <Box display={{ base: "flex", sm: "none" }}>
            <Icon as={AiOutlineMenuUnfold} w={8} h={8} onClick={onOpen} />
            <Drawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              size="xs"
            >
              <DrawerOverlay>
                <DrawerContent>
                  <DrawerCloseButton
                    _focus={{
                      borderColor: "none",
                      boxShadow: "none",
                    }}
                  />
                  <DrawerBody px="0" pt="3rem">
                    <Image src={Logo} alt="logo" w="4rem" mb="1rem" ml="2rem" />
                    <List>
                      <Divider my="0.5rem" />
                      {headerLinksData.map((headerLink: any) => {
                        return (
                          <ListItem key={headerLink.key}>
                            <ListIcon
                              as={headerLink.as}
                              h="1.3rem"
                              w="1.3rem"
                              mx="2rem"
                              color={COLORS.PRIMARY_COLOR}
                            />
                            <NavLinkItem
                              fontSize="0.8rem"
                              color="grey"
                              aria-label={headerLink.title}
                              onClick={onClose}
                              url={headerLink.url}
                            >
                              {headerLink.title}
                            </NavLinkItem>
                            <Divider my="0.5rem" />
                          </ListItem>
                        );
                      })}
                    </List>
                  </DrawerBody>
                </DrawerContent>
              </DrawerOverlay>
            </Drawer>
          </Box>
          <NavLinkItem
            display={{ base: "none", sm: "flex" }}
            w="18%"
            aria-label="homepage"
            url="/"
          >
            <Image src={Logo} alt="logo" w={{ base: "6rem", md: "8rem" }} />
          </NavLinkItem>
          <Flex
            as="nav"
            w="40%"
            justify="flex-end"
            display={{ base: "none", sm: "flex" }}
            direction="row"
            pl={{ base: "none", sm: "1rem", md: "none" }}
            align="center"
          >
            {headerLinksData.map((headerLink: any) => {
              return (
                <Box key={headerLink.key} mr="10%">
                  <NavLinkItem
                    aria-label={headerLink.title}
                    url={headerLink.url}
                  >
                    {headerLink.title}
                  </NavLinkItem>
                </Box>
              );
            })}
          </Flex>
          <Flex
            align="center"
            justify="flex-end"
            w={{ base: "80%", sm: "42%" }}
          >
            <LinkItem
              mr={{ base: "10%", sm: "5%", md: "10%" }}
              isAnchor={false}
              url="/"
            >
              Sign In
            </LinkItem>
            <CustomButton>Get Free Account</CustomButton>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
