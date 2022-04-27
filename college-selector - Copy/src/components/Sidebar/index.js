import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer onClick={toggle} isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          {/* <SidebarLink to="discover" onClick={toggle}>
            Discover
          </SidebarLink> */}
          {/* <SidebarLink to="about" onClick={toggle}>
            Sign up
          </SidebarLink> */}
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Register / Login</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
export default Sidebar;
