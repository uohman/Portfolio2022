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
    font-weight: 500;
    text-align: left;
    font-size: 60px;
    line-height: 60px;
    margin-top: 44vh;
    color: var(--color-accent);
`

const BigText = styled.p`
    // margin-left: 12vw;
    padding: 50px 0;
    font-family: var(--font-main);
    font-weight: 500;
    text-align: right;
    font-size: 20px;
    line-height: 23px;
    color: var(--color-accent);
    max-width: 650px;
    margin: 0 0 0 auto;
    
`