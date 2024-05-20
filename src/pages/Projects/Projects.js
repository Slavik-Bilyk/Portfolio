import React from 'react';
import { Background, VisitSiteLink, SkillList, SkillListItem, Img, Paragraph, ProjectName, Div, Title, Wrapper } from './Projects.styled';
import WebStudio from './images/WebStudio.png';
import houseStaf from './images/houseStaf.png'
import Movies from './images/Movies.png'
import { PiOpenAiLogoFill } from "react-icons/pi";

const Projects = () => {
  return (
    <Background>
      <Wrapper>
        <Title>Projects</Title>

        <Div>
          <ProjectName>WebStudio</ProjectName>
          <VisitSiteLink href='https://slavik-bilyk.github.io/goit-markup-hw-08/index.html' target='_blank'>
            <PiOpenAiLogoFill size={30} />
          </VisitSiteLink>
          <Img src={WebStudio}/>
          <SkillList>
            <SkillListItem>
              HTML
              <span>Semantic HTML5, Accessibility, SEO-friendly markup</span>
            </SkillListItem>
            <SkillListItem>
              CSS
              <span> Responsive Design, Sass/SCSS, CSS Methodologies BEM</span>
            </SkillListItem>
          </SkillList>
        </Div>

        <Div>
          <ProjectName>House Staf</ProjectName>
          <VisitSiteLink href='' target='_blank'>
            <PiOpenAiLogoFill size={30} />
          </VisitSiteLink>
          <Img src={houseStaf}/>
          <SkillList>
            <SkillListItem>
              JS
            </SkillListItem>
            <SkillListItem>
              React
            </SkillListItem>
          </SkillList>
        </Div>

        <Div>
          <ProjectName>Movies</ProjectName>
          <VisitSiteLink href='https://slavik-bilyk.github.io/goit-markup-hw-08/index.html' target='_blank'>
            <PiOpenAiLogoFill size={30} />
          </VisitSiteLink>
          <Img src={Movies}/>
          <SkillList>
            <SkillListItem>
              JS
            </SkillListItem>
            <SkillListItem>
              React
            </SkillListItem>
          </SkillList>
        </Div>
      </Wrapper>
    </Background>
  );
}

export default Projects;
