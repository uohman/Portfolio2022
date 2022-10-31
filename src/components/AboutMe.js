import React from 'react'
import styled from 'styled-components/macro'

export const AboutMe = () => {
  return (
    <BigText>
        I am a creative and experienced graphic designer with frontend developer skills.
        I’m all about problem solving and creating awesome, meaningful products for people to love.
    </BigText>
  )
};

const BigText = styled.p`
    margin-left: 10vw;
    padding: 50px 0;
    font-family: var(--font-main);
    font-weight: 700;
    text-align: right;
    font-size: 20px;
    line-height: 23px;
    color: var(--color-blue);
`