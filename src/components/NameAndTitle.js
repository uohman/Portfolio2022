import React from 'react'
import styled from 'styled-components/macro'

export const NameAndTitle = () => {
  return (
    <>
      <NameAndTitleContainer>
        <h4>Ulrika Öhman</h4>
        <h5>— frontend developer & graphic designer</h5>
      </NameAndTitleContainer>
      <hr
        style={{
          border: '1px solid var(--color-accent)'
        }} />
    </>
  )
};

const NameAndTitleContainer = styled.section`
    // outline: 1px solid red;
    margin: 3vh 3vh 1.5vh;
    font-family: var(--font-main);
    font-weight: 500;

    h4 {
      color: var(--color-accent);
      font-size: 1em;
    }

    h5 {
      color: var(--color-accent);
      font-size: 1em;
    }
  `