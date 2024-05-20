import styled from "styled-components";
import { NavLink } from 'react-router-dom';


export const HeaderWrapper = styled.div`
  width: 1600px; 
  margin: 150px 0; 
`;

export const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  margin: 0 auto; 
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%); 
  z-index: 999;
  padding: 20px; 
  background-color: #0a0a0aea;`

export const Title = styled.h2`
  margin-left: 170px;
  font-weight: 600;
  font-size: 25px;
  position: relative;
  margin-top: 20px;

  ::before {
    content: '';
    width: 15px;
    height: 15px;
    background-color: #487efb;
    position: absolute;
    bottom: 8px;
    left: -20px;
  }

  :hover {
    color: #487efb;
  }
`;

export const Subtitle = styled.span`
  font-weight: 500;
  font-size: 15px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 30px;
  margin-right: 200px;
  margin-top: 50px;
`;

export const NavItem = styled.li`
  display: flex;
  text-align: center;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  transition: color 0.4s;
  font-size: 15px;
  color: white;
  text-decoration: none;
  padding: 0;
  margin: 0;
  border: none;
  

  &:hover {
    color: #487efb;
    cursor: pointer;
  }

  &.active {
    color: #487efb;
  }
`;

