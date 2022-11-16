import React from 'react'
import projects from 'graphic-data.json'
import { OuterWrapperBeige, InnerWrapper } from 'GlobalStyles';
import styled from 'styled-components/macro'
import { CarouselSliderEden, CarouselSliderBergtagna } from './CarouselSlider';

export const GraphicDesignProjects = () => {
  return (
    <OuterWrapperBeige>
      <InnerWrapper>
        <CarouselSliderEden />
        {projects.map((project) => (
          <ProjectWrapper key={project.id}>
            <Title>{project.title}</Title>
            <Column>
              <Subtitle>Client:</Subtitle><Text>{project.client}</Text>
              <Subtitle>What I did:</Subtitle><Text>{project.whatIDid}</Text>
            </Column>
            <Column>
              <Text>{project.description}</Text>
            </Column>
          </ProjectWrapper>
        ))}
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
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin: 5vh 0; 

    .project__image img{
            width: 100%;
            height: auto;
        }
`

export const Column = styled.div`
    /* width: 30vw; */
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
`

export const Title = styled.h3`
    font-family: var(--font-main);
    font-weight: 700;
    font-size: 22px;
    text-align: left;
    color: var(--color-accent);
    width: 100%;
    margin-bottom: 10px;
`

export const Subtitle = styled.h4`
    font-family: var(--font-secondary);
    font-weight: 400;
    font-size: 18px;
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 1px;
`

export const Text = styled.p`
    font-family: var(--font-secondary);
    font-weight: 400;
    text-align: left;
    font-size: 18px;
    line-height: 20px;
    padding: 0 0 10px; 
`
