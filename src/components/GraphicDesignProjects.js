/* eslint-disable max-len */
import React from 'react'
import { OuterWrapperBeige, InnerWrapper } from 'GlobalStyles';
import styled from 'styled-components/macro'
import { CarouselSliderEden, CarouselSliderBergtagna, CarouselSliderDuellen } from './CarouselSlider';

export const GraphicDesignProjects = () => {
  return (
    <OuterWrapperBeige>
      <InnerWrapper>

        <CarouselSliderEden />
        <ProjectWrapper>
          <Title>Eden flowers</Title>
          <Column>
            <Subtitle>Client:</Subtitle><Text>Eden flowers</Text>
            <Subtitle>What I did:</Subtitle><Text>Branding suite, logotype</Text>
          </Column>
          <Column>
            <Text>
              Graphic profile and logotype for Eden Flowers, an online floristry.
            </Text>
          </Column>
        </ProjectWrapper>

        <CarouselSliderBergtagna />
        <ProjectWrapper>
          <Title>De Bergtagna</Title>
          <Column>
            <Subtitle>Client:</Subtitle>
            <Text>Svenska litteratursällskapet i Finland/Finlands svenska folkmusikinstitut</Text>
            <Subtitle>What I did:</Subtitle><Text>Layout</Text>
          </Column>
          <Column>
            <Text>
              Album cover, booklet and label for “De Bergtagna” by Ostrobothnia Jazz Sextet.
            </Text>
          </Column>
        </ProjectWrapper>

        <CarouselSliderDuellen />
        <ProjectWrapper>
          <Title>Duellen 2.0</Title>
          <Column>
            <Subtitle>Client:</Subtitle>
            <Text>Förlaget M</Text>
            <Subtitle>What I did:</Subtitle><Text>Book design & illustration</Text>
          </Column>
          <Column>
            <Text>
            Book cover and inlay for the quiz book “Duellen 2.0” by Jesper von Hertzen.
            </Text>
          </Column>
        </ProjectWrapper>

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
    gap: 0 5vw;
`

export const Column = styled.div`
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
