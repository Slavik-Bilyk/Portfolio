import styled from "styled-components";

export const Container = styled.footer`
  max-width: 1480px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const FooterText = styled.p``;

export const Section = styled.div`
  display: flex;
  justify-content: end;
  text-align: center;
`;

export const SectionList = styled.ul`
  display: flex;
  gap: 50px;
`;

export const SectionItem = styled.li`
  h4 {
    margin-bottom: 10px;
  }

  p {
    margin: 0;
  }
`;

export const IconList = styled.ul`
  display: flex;
  gap: 25px;
  margin-top: 10px;
`;

export const IconItem = styled.li`
`;

export const SocialLink = styled.a`
  color: white;
  font-size: 15px;
  transition: color 0.4s, transform 1s;

  &:hover {
    color: #487efb;
  }
`;
