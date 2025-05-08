import { assets } from "@assets/_index";
import { Box, Button, Flex, IconButton, Image } from "@chakra-ui/react";
import Drawer from "@components/drawer/Drawer";
import { Link } from "@components/link/Link";
import { TextLink } from "@components/link/Text-Link";
import { IntroNavBar } from "@components/nav-bar/Intro-Nav";
import { SectionWrapper } from "@components/wrappers/Section-Wrapper";
import { constants } from "@constants/index";
import useScroll from "@hooks/useScroll";
import { useToggle } from "@hooks/useToggle";
import React from "react";
import { FiMenu } from "react-icons/fi";



export const NavBar = ({navLinks}) => {
  const menu = useToggle();
  const toggleMenu = () => menu.set(!menu.isOpen);
  const scroller = useScroll();

  return (
    <Box>
      <Box display={{ base: "none", lg: "block" }}>
        <IntroNavBar />
      </Box>

      <Drawer isOpen={menu.isOpen} onClose={toggleMenu}>
        <SectionWrapper py="50px">
          <NavBarItems handleScroll={scroller.handleScroll} />
          <Box display={{ base: "block", lg: "none" }}>
            <IntroNavBar mt="30px" />
          </Box>
        </SectionWrapper>
      </Drawer>

      <Box bg={constants.colors.primaryTint2}>
        <SectionWrapper py="32px">
          <Box display={{ base: "block", md: "none" }}>
            <IconButton
              size="sm"
              bg="#00000020"
              icon={<FiMenu />}
              onClick={toggleMenu}
            />
          </Box>

          <Box display={{ base: "none", xl: "block" }}>
            <NavBarItems menu={menu} handleScroll={scroller.handleScroll} />
          </Box>

          <Flex
            display={{ base: "none", md: "flex", xl: "none" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <BrandLink />

            <Box>
              <IconButton
                size="sm"
                bg="#00000020"
                icon={<FiMenu />}
                onClick={toggleMenu}
              />
            </Box>
          </Flex>
        </SectionWrapper>
      </Box>
    </Box>
  );
};

const NavLink = ({ name, url, ...props }) => {
  return (
    <TextLink
      name={name}
      url={url}
      me={{ xl: "64px" }}
      mt={{ base: "20px", xl: "0px" }}
      {...props}
    ></TextLink>
  );
};

const BrandLink = ({ ...props }) => {
  return (
    <Link to={constants.appRoutes.index}>
      <Image
        src={assets.logoColored}
        h={{ base: "40px", xl: "100%" }}
        minW={{ base: "40px", xl: "100%" }}
      />
    </Link>
  );
};

const NavBarItems = ({ menu, handleScroll }) => {
  return (
    <Flex
      flexDir={{ base: "column", xl: "row" }}
      alignItems={{ xl: "center" }}
      justifyContent={{ xl: "space-between" }}
    >
      <Box>
        <BrandLink />
      </Box>

      <Flex
        flexDir={{ base: "column", xl: "row" }}
        alignItems={{ xl: "center" }}
        mt={{ base: "50px", xl: "0px" }}
      >
        {navLinks.map((item, index) => (
          <NavLink key={index} name={item.name} url={item.url}  />
        ))}

        {menu && (
          <Button
            bg={constants.colors.primary}
            minH="52px"
        
            color={constants.colors.white}
            onClick={() => handleScroll("quote")}
            fontFamily={constants.fonts.regular}
          >
            Request A Service
          </Button>
        )}
      </Flex>
    </Flex>
  );
};
