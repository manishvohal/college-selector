import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  Navbtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  });

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            College Counterpart
          </NavLogo>
          <MobileIcon onClick={toggle}>
          </MobileIcon>
          <NavMenu>
          {/* <NavItem>
              <NavLinks
                // to="/"
                onClick={toggleHome}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Home{" "}
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About{" "}
              </NavLinks>
            </NavItem> */}
          </NavMenu>
          <Navbtn>
            <NavBtnLink to="/signin">Register / Log In</NavBtnLink>
          </Navbtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
