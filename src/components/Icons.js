import React from 'react'
import styled from 'styled-components/macro'

export const Icons = () => {
  return (
    <IconsWrapper>
      <a href="#" target="_blank" rel="noreferrer">
        <img src="/Images/Mail-logo.svg" alt="Send me an e-mail" />
      </a>
      <a href="#" target="_blank" rel="noreferrer">
        <img src="/Images/Linkedin-logo.svg" alt="Go to my LinkedIn page" />
      </a>
      <a href="#" target="_blank" rel="noreferrer">
        <img src="/Images/Github-logo.svg" alt="Go to my GitHub page" />
      </a>
    </IconsWrapper>
  )
};

const IconsWrapper = styled.div`
    // outline: 1px solid red;
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 3vh;
    top: 11vh;

    img {
        width: 25px;
        height: 25px;
        margin: 10px 0;
    }
`