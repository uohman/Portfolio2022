import React from 'react'
import styled from 'styled-components/macro'

export const Header = () => {
  return (
    <Heading>
        Hello! Nice to meet you!
    </Heading>
  )
};

const Heading = styled.h1`
    font-family: var(--font-main);
    font-weight: 700;
    text-align: left;
    font-size: 60px;
    line-height: 60px;
    color: var(--color-blue);
`