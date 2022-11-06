import React from 'react'
import projects from 'data.json'
import { OuterWrapperBlue, InnerWrapper, Subheading, Title } from 'GlobalStyles';
import styled from 'styled-components/macro'

export const FeaturedProjects = () => {
  return (
    <OuterWrapperBlue>
      <InnerWrapper>
        <Subheading><span>Featured projects</span></Subheading>

        {projects.map((project) => (
          <ProjectWrapper key={project.id}>
            <a href={project.url} target="_blank" rel="noreferrer">
              <div className="image-container">
                <div className="project__image"><img src={project.img_src} alt="Project" /></div>
                <div className="after" />
              </div>
            </a>
            <StyledText>
              <StyledTitleAnchor href={project.url} target="_blank" rel="noreferrer">
                <Title>{project.title}</Title>
              </StyledTitleAnchor>
              <div className="project__description">{project.description}(Watch live demo <StyledLiveDemoAnchor href={project.url_netlify}>here</StyledLiveDemoAnchor>.)</div>
              <StyledTags>
                {project.tags.map((tag) => (
                  <li key={tag.id}>{tag.tech}</li>))}
              </StyledTags>
            </StyledText>
          </ProjectWrapper>
        ))}

      </InnerWrapper>
    </OuterWrapperBlue>
  )
};

export const ProjectWrapper = styled.article`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5vh 0;

    &:nth-child(odd) {
    flex-direction: row-reverse;
    }

    .image-container{
                position: relative;
            }

             .image-container .after {
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                top: 0;
                left: 0;
                width: 100%;
                height: 98.5%;
                background: #eea1ab75;
            }

            .image-container:hover .after {
                display: block;
                display: none;
                color: #FFF;
            }

          /*   .after{
                color: white;
                font-family: var(--font-secondary);
                font-weight: 400;
                font-size: 15px;
                text-transform: uppercase;
                text-align: center;
            }  */

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

`
export const StyledText = styled.div`
    width: 28vw;
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