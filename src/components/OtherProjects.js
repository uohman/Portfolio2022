import React from 'react'
import otherProjects from 'other-data.json'
// import { OuterWrapperBeige, InnerWrapper } from 'GlobalStyles';
import styled from 'styled-components/macro'

export const OtherProjects = () => {
  return (
    <>
      <OtherProjectsTitle>Other projects</OtherProjectsTitle>
      {otherProjects.map((project) => (
        <ProjectWrapper key={project.id}>
          <StyledText>
            <StyledTitleAnchor href={project.url} target="_blank" rel="noreferrer">
              <Title>{project.title}</Title>
            </StyledTitleAnchor>
            <div className="project__description">{project.description} (Watch live demo <StyledLiveDemoAnchor href={project.url_netlify}>here</StyledLiveDemoAnchor>.)</div>
            <StyledTags>
              {project.tags.map((tag) => (
                <li key={tag.id}>{tag.tech}</li>))}
            </StyledTags>
          </StyledText>
        </ProjectWrapper>
      ))}
    </>
  )
};

export const OtherProjectsTitle = styled.h3`
    font-family: var(--font-main);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
    font-size: 20px;
    color: var(--color-accent);
    margin: 10vh 0 5vh;
`

export const ProjectWrapper = styled.article`
    // outline: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2vh 0 2vh;
  
                .project__description{
                    // outline: 1px solid red;
                    font-family: var(--font-secondary);
                    font-weight: 400;
                    text-align: left;
                    font-size: 18px;
                    line-height: 20px;
                    padding: 10px 0;
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
  `

export const StyledText = styled.div`
      width: 50vw;
      display: flex;
      flex-direction: column;
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