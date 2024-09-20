import React from 'react'
import styled from 'styled-components/macro'

export const NameAndTitle = () => {
  return (
    <Wrapper>
      <NameAndTitleContainer>
        <h4>Ulrika Fougstedt</h4>
        <h5>— frontend developer & graphic designer</h5>
      </NameAndTitleContainer>
      <hr
        style={{
          border: '1px solid var(--color-accent)',
          margin: '0 60px 0 18px'
        }} />
    </Wrapper>
  )
};

const Wrapper = styled.div`
    @media (max-width: 767.98px) {

        hr {
          
        }
    }
`

const NameAndTitleContainer = styled.section`
    // outline: 1px solid red;
    margin: 18px 18px 6px;
    font-family: var(--font-main);
    font-weight: 400;

    h4 {
      color: var(--color-accent);
      font-size: 1em;
    }

    h5 {
      color: var(--color-accent);
      font-size: 1em;
    }

    @media (max-width: 767.98px) {

      //margin: 2vh 2vh 0.8vh;
      
      h4 {
        font-size: 0.8em;
      }

      h5 {
        font-size: 0.8em;
      }
    }
  `