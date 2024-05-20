import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;

    max-width: 1480px;
    margin: 200px auto;
`;

export const Img = styled.img`
    border-radius: 50%;
    height: 20em;
    object-fit: cover;

    width: 20em;
    margin-top: 30px;
    margin-bottom: 20px;
`;

export const Title = styled.h1`
    font-size: 100px;
    margin-top: 50px;
    margin-bottom: 30px;
    font-weight: 600;
`;

export const NameBlock = styled.div`
    margin-right: 50px;
    background-color: #FAF0E6;
    display: block;
    width: 400px;
    height: 600px;
    margin-left: 350px;
    box-shadow: -5px 5px 20px white;
`;

export const AboutMe = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
`;

export const Block = styled.div`
    background-color: #4C4030;
    display: flex;
    max-width: 600px;
`;

export const Heading = styled.h2`
    font-weight: 600;
    font-size: 25px;
    margin-bottom: 50px;
    position: relative;
`;

export const Paragraph = styled.p`
    font-weight: 500;
    letter-spacing: 5px;
    font-size: 18px;
    margin-bottom: 50px;
`;

export const ContactList = styled.div``;

export const List = styled.ul`
    background-color: #0a0a0aea;
    display: flex;
    height: 80px;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;

export const ListItem = styled.li``;

export const Link = styled.a`
    color: white;
    font-size: 20px;
    transition: color 0.4s, transform 1s;

    &:hover {
        color: #487efb;
    }
`;

export const SubHeading = styled.h3`
    font-weight: 600;
    font-size: 25px;
    white-space: nowrap;
    margin-bottom: 30px;
`;

export const ButtonsList = styled.ul`
    display: flex;
    gap: 10px;
    justify-content: center;
`;

export const ButtonItem = styled.li`
    margin-bottom: 40px;
`;

export const StyledNavLink = styled(NavLink)`
    background-color: transparent;
    border: 1px solid white;
    border-radius: 20px; 
    padding: 10px 20px; 
    text-decoration: none; 
    color: black; 
    font-weight: bold; 
    transition: background-color 0.3s; 

    &:hover {
        background-color: #487efb; 
        cursor: pointer;
    }
`;

export const MyInfo = styled.p`
        line-height: 30px;
`