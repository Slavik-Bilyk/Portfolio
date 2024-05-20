import styled from "styled-components";
import { PiOpenAiLogoFill } from "react-icons/pi";

export const Background = styled.div`
 background-color: #4C4030;
 display: flex;
 flex-direction: column;
 align-items: center;
`

export const Title = styled.h1`
    margin-top: 120px;
    font-size: 50px;
    margin-bottom: 120px;

   
  position: relative;
  padding-left: 25px; 

  &::before {
    content: '';
    width: 25px;
    height: 25px;
    background-color: #487efb;
    position: absolute;
    top: 50%;
    left: -10px;
    transform: translateY(-50%);
  }


`
export const Wrapper = styled.div`
    width: 850px;
   
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Div = styled.div`
 background-color: #0a0a0aea;
 height: 600px;
 width: 800px;
 padding: 70px 50px;
 margin-bottom: 150px;
 position: relative;
 
`

export const ProjectName = styled.h2`
    color: #487efb;
    margin-bottom: 30px;

`


export const Img = styled.img`
width: 600px;
margin-left: 100px;
`




export const VisitSiteLink = styled.a`
    position: absolute;
    top: 60px;
    left: 750px;
    transition: color 0.3s;
    color: white;

    &:hover {
        color: #487efb;
        cursor: pointer;
    }
`;

export const SkillList = styled.ul`
  list-style: none;
  padding: 0;

`

export const SkillListItem = styled.li`
   position: relative;
  padding-left: 25px; 
  margin-bottom: 25px;
  margin-top: 40px ;
  font-size: 18px;

  &::before {
    content: '';
    width: 15px;
    height: 15px;
    background-color: #487efb;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%); 
  }

  & > span {
    display: block;
    margin-top: 5px; 
    font-size: 0.9em;
    color: #666;
  }
`

