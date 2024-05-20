import React from 'react'
import slavik from './images/slavik.jpeg'
import { Container, MyInfo, StyledNavLink, Link, Title, ButtonItem, ButtonsList, Button, Img, NameBlock, ContactList, SubHeading, ListItem, List, Paragraph, Heading, Block, AboutMe} from './Welcome.styled'
import { FaFacebookF, FaTwitter, FaTelegramPlane, FaInstagram   } from "react-icons/fa";
import { NavLink } from 'react-router-dom';



const Welcome = () => {
    return (
      <>
       <Block>
       <Container>
       <NameBlock>
          <Img src={slavik} alt='Моє фото' />
          <Heading>Bilyk Viacheslav</Heading>
          <Paragraph>FUTURE DEVELOPER</Paragraph>
          <ContactList>
              <List>
                  <ListItem>
                      <Link href="">
                          <FaFacebookF/>
                      </Link>
                  </ListItem>
                  <ListItem>
                      <Link href="">
                          <FaTwitter />
                      </Link>
                  </ListItem>
                  <ListItem>
                      <Link href="">
                          <FaTelegramPlane />
                      </Link>
                  </ListItem>
                  <ListItem>
                      <Link href="">
                          <FaInstagram />
                      </Link>
                  </ListItem>
              </List>
          </ContactList>
      </NameBlock>
  
        <AboutMe>
          <Title>Hello</Title>
          <SubHeading>Here's who I am & what I do</SubHeading>
          <ButtonsList>
              <ButtonItem>
                  <StyledNavLink to='/resume'>
                      RESUME
                  </StyledNavLink>
              </ButtonItem>
              <ButtonItem>
                  <StyledNavLink to='/projects'>
                      PROJECTS
                  </StyledNavLink>
              </ButtonItem>
          </ButtonsList>
          <MyInfo>
          My name is Slavko. I am engaged in programming and on this "site" you will see information about me and my work.
          </MyInfo>
        </AboutMe>
        </Container>
       </Block>
      </>
    )
  }
  
  export default Welcome;