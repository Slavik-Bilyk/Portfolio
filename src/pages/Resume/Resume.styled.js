import styled from "styled-components";

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

export const Subtitle = styled.h2`
    margin-bottom: 40px;
    margin-right: 720px;
    font-size: 30px;
    white-space: nowrap;
`

export const ExperienceSection = styled.section`
   
`

export const Div = styled.div`
 background-color: #0a0a0aea;
 height: 420px;
 width: 800px;
 padding: 70px 50px;
 margin-bottom: 150px;
 
`

export const Paragraph = styled.p`
    font-size: 20px;
    line-height: 40px;
`

export const EducationSection = styled.section`

`

export const Year = styled.h2`
    color: #487efb;
`

export const University = styled.p`
line-height: 25px;
margin-bottom: 30px;
font-size: 20px;
`

export const Specialty = styled.p`
    font-size: 18px;
    margin-bottom: 70px;
`

export const SkillList = styled.ul`
  list-style: none;
  padding: 0;

`

export const SkillListItem = styled.li`
   position: relative;
  padding-left: 25px; 
  margin-bottom: 25px; 
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
`;