import React from 'react'
import { Background, Specialty, SkillList, SkillListItem, University, Year, Paragraph, EducationSection, Div, ExperienceSection, Wrapper, Title, Subtitle } from './Resume.styled'

const Resume = () => {
  return (
    <Background>
      <Wrapper>
      <Title>Resume</Title>
      <ExperienceSection>
        <Subtitle>Experience</Subtitle>
        <Div>
        <Paragraph>I can't boast of a lot of experience, since I haven't worked in this specialty yet, but I studied and practiced a lot) Below I will describe what exactly I am capable of and here you will see all my projects and draw conclusions for yourself.</Paragraph>
        </Div>
      </ExperienceSection>
      <EducationSection>
        <Subtitle>Education</Subtitle>
        <Div>
            
                <Year>2019-2024</Year>
                <University>ВІННИЦЬКИЙ НАВЧАЛЬНО-НАУКОВИЙ  <br/> ІНСТИТУТ ЕКОНОМІКИ ЗУНУ</University>
                <Specialty>Спеціальність: Митна справа</Specialty>
            
           
                <Paragraph>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</Paragraph>
            
        </Div>
        
      </EducationSection>
      <section>
      <Div>
      <Subtitle>Professional skillset</Subtitle>
      <SkillList>
        <SkillListItem>
          HTML
          <span>Semantic HTML5, Accessibility, SEO-friendly markup</span>
        </SkillListItem>
        <SkillListItem>
          CSS
          <span>Flexbox, Grid, CSS Modules, Responsive Design, Sass/SCSS, CSS Methodologies BEM</span>
        </SkillListItem>
        <SkillListItem>
          JavaScript
          <span>ES6+, DOM Manipulation, Fetch API, Async/Await,  Module Bundlers ( Webpack, Parcel)</span>
        </SkillListItem>
        <SkillListItem>
          React
          <span>Hooks, Props, Context API, Redux</span>
        </SkillListItem>
        <SkillListItem>
            Library
            <span>Axios, Styled Components, Redux Toolkit, Formik, React Router</span>
        </SkillListItem>
      </SkillList>
    </Div>
      </section>
      </Wrapper>
    </Background>
  )
}

export default Resume
