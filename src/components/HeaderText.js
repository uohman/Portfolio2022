/* eslint-disable max-len */
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
        I’m a creative and experienced graphic designer who added frontend developer to my title and now I’m all about creating awesome looking and meaningful products combining my two professions.
        </BigText>
      </InnerWrapper>
    </OuterWrapperBeige>
  )
};

const Heading = styled.h1`
    font-family: var(--font-main);
    font-weight: 600;
    text-align: left;
    font-size: 60px;
    line-height: 60px;
    margin-top: 44vh;
    color: var(--color-accent);

    @media (max-width: 767.98px) {
    font-size: 40px;
    line-height: 40px;
    margin-top: 0;
    }
`

const BigText = styled.p`
    // margin-left: 12vw;
    padding: 50px 0 25px;
    font-family: var(--font-main);
    font-weight: 600;
    text-align: right;
    font-size: 20px;
    line-height: 24px;
    color: var(--color-accent);
    max-width: 720px;
    margin: 0 0 0 auto;
    
    @media (max-width: 767.98px) {
      padding: 30px 0;
      font-size: 22px;
      line-height: 26px;
    }
`