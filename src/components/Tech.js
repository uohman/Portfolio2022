import React from 'react'
import { InnerWrapper, OuterWrapperWhite, Subheading } from 'GlobalStyles';
import styled from 'styled-components/macro'

export const Tech = () => {
  return (
    <OuterWrapperWhite>
      <InnerWrapper>
        <Subheading><span>Tech</span></Subheading>
        <SectionText>
        HTML, CSS, Flexbox, <span style={{ textDecoration: 'underline' }}>JavaScript ES6</span>, JSX, <span style={{ textDecoration: 'underline' }}>React</span>, <span style={{ textDecoration: 'underline' }}>Redux</span>,
        Node.js, Mongo DB, Web Accessibility, API:s, mob-programming, pair-programming, GitHub
        </SectionText>
      </InnerWrapper>
    </OuterWrapperWhite>
  )
};

const SectionText = styled.p`
    font-family: var(--font-secondary);
    font-weight: 400;
    text-align: center;
    font-size: 30px;
    line-height: 40px;
    color: #000;

    @media (max-width: 767.98px) {
      font-size: 25px;
      line-height: 32px;
    }
`
