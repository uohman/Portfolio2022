import React from 'react'
// import projects from 'data.json'
import { OuterWrapperBeige, InnerWrapper, Subheading, SecondSubheading } from 'GlobalStyles';
import styled from 'styled-components/macro'

export const GraphicDesignProjects = () => {
  return (
    <OuterWrapperBeige>
      <InnerWrapper>
        <Subheading><span>Featured projects</span></Subheading>
        <SecondSubheading>Graphic design</SecondSubheading>

      </InnerWrapper>
    </OuterWrapperBeige>
  )
};

export const ProjectWrapper = styled.article`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5vh 0;

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