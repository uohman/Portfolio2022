import React from 'react'
import { ContainerWhite, Subheading } from 'GlobalStyles';
import styled from 'styled-components/macro'

export const Tech = () => {
  return (
    <ContainerWhite>
      <Subheading><span>Tech</span></Subheading>
      <SectionText>
        HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Redux,
        Node.js, Mongo DB, Web Accessibly, API:s, mob-programming, pair-programming, Github.
      </SectionText>
    </ContainerWhite>
  )
};

const SectionText = styled.p`
    font-family: var(--font-secondary);
    font-weight: 400;
    text-align: center;
    font-size: 30px;
    line-height: 35px;
    color: #000;
`
