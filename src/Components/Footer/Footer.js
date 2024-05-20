import React from 'react';
import { Container, FooterText, Section, SectionList, SectionItem, IconList, IconItem, SocialLink } from './Footer.styled';
import { FaFacebookF, FaTwitter, FaTelegramPlane, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <FooterText>
        © 2035 by Bilyk Viacheslav. Powered, secured and chinazes
      </FooterText>
      <Section>
        <SectionList>
          <SectionItem>
            <h4>Call</h4>
            <p>097-280-22-25</p>
          </SectionItem>
          <SectionItem>
            <h4>Write</h4>
            <p>info@mysite.com</p>
          </SectionItem>
          <SectionItem>
            <h4>Follow</h4>
            <IconList>
              <IconItem>
                <SocialLink href="">
                  <FaFacebookF />
                </SocialLink>
              </IconItem>
              <IconItem>
                <SocialLink href="">
                  <FaTwitter />
                </SocialLink>
              </IconItem>
              <IconItem>
                <SocialLink href="">
                  <FaTelegramPlane />
                </SocialLink>
              </IconItem>
              <IconItem>
                <SocialLink href="">
                  <FaInstagram />
                </SocialLink>
              </IconItem>
            </IconList>
          </SectionItem>
        </SectionList>
      </Section>
    </Container>
  );
};

export default Footer;
