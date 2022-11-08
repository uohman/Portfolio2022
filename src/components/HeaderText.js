import React from 'react'
import styled from 'styled-components/macro'
import { OuterWrapperBeige, InnerWrapper } from 'GlobalStyles';

export const HeaderText = () => {
  return (
    <OuterWrapperBeige>
      <InnerWrapper>
        <Heading>
          Hello! Nice to meet you!
        </Heading>
        <BigText>
      I am a creative and experienced graphic designer with frontend developer skills.
      I’m all about problem solving and creating awesome, meaningful products for people to love.
        </BigText>
      </InnerWrapper>
    </OuterWrapperBeige>
  )
};

const Heading = styled.h1`
    font-family: var(--font-main);
    font-weight: 700;
    text-align: left;
    font-size: 60px;
    line-height: 60px;
    margin-top: 40vh;
    color: var(--color-accent);
`

const BigText = styled.p`
    margin-left: 10vw;
    padding: 50px 0;
    font-family: var(--font-main);
    font-weight: 700;
    text-align: right;
    font-size: 20px;
    line-height: 23px;
    color: var(--color-accent);
`