import React from 'react';
import {HeaderComponent, StyledNavLink, Title, Subtitle, NavList, NavItem, HeaderWrapper } from './Header.styled';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderComponent>
        <Title>Bilyk Viacheslav <Subtitle>/ FUTURE DEVELOPER</Subtitle></Title>
        <nav>
          <NavList>
            <NavItem>
              <StyledNavLink exact to='/'>ABOUT ME</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to='/resume'>RESUME</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to='/projects'>PROJECTS</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to='/contact'>CONTACT</StyledNavLink>
            </NavItem>
          </NavList>
        </nav>
      </HeaderComponent>
    </HeaderWrapper>
  );
};

export default Header;
