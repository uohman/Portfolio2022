import React from 'react'
import projects from 'data.json'
import { OuterWrapperBeige, InnerWrapper } from 'GlobalStyles';
import styled from 'styled-components/macro';
import { OtherProjects } from './OtherProjects';

export const FrontendProjects = () => {
  return (
    <OuterWrapperBeige>
      <InnerWrapper>
        {projects.map((project) => (
          <ProjectWrapper key={project.id}>
            <a href={project.url} target="_blank" rel="noreferrer">
              <div className="image-container">
                <div className="project__image"><img src={project.img_src} alt="Project" /></div>
              </div>
            </a>
            <StyledText>
              <StyledTitleAnchor href={project.url} target="_blank" rel="noreferrer">
                <Title>{project.title}</Title>
              </StyledTitleAnchor>
              <div className="project__description">{project.description}<br />(Watch live demo <StyledLiveDemoAnchor href={project.url_netlify}>here</StyledLiveDemoAnchor>.)</div>
              <StyledTags>
                {project.tags.map((tag) => (
                  <li key={tag.id}>{tag.tech}</li>))}
              </StyledTags>
            </StyledText>
          </ProjectWrapper>
        ))}
        <OtherProjects />
      </InnerWrapper>
    </OuterWrapperBeige>
  )
};

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ProjectWrapper = styled.article`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5vh 0;

    &:nth-child(odd) {
      flex-direction: row-reverse;
    }

    a {
      cursor: pointer;
    }

    .project__image img{
            width: 32vw;
            height: auto;
        }

            .project__description{
                    font-family: var(--font-secondary);
                    font-weight: 400;
                    text-align: left;
                    font-size: 18px;
                    line-height: 20px;
                    padding: 10px 0;
                }

    @media (max-width: 767.98px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-content: center;
        align-content: center;
      
        .project__image img{
            width: 80vw;
            //height: auto;
        }
    }
`

export const Title = styled.h3`
    font-family: var(--font-main);
    font-weight: 700;
    font-size: 22px;
    text-align: left;
    color: var(--color-accent);

    :hover {
      color: var(--color-lighterAccent);
    }

    @media (max-width: 767.98px) {
        margin-top: 10px;
    }
`

export const StyledText = styled.div`
    width: 28vw;
    display: flex;
    flex-direction: column;

    @media (max-width: 767.98px) {
      width: 80vw;
    }
`

export const StyledTitleAnchor = styled.a`
    text-decoration: none;
`

export const StyledLiveDemoAnchor = styled.a`
    color: black;
`

export const StyledTags = styled.div`
    display: flex;
    list-style: none;

    li {
    font-family: var(--font-secondary);
    font-weight: 400;
    background-color: var(--color-lighterAccent);
    text-decoration: none;
    font-size: 14px; 
    line-height: 12px;
    padding: 3px 10px;
    margin: 3px 6px 10px 0;
    }  
`