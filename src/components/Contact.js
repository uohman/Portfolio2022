import React from 'react'
import styled from 'styled-components/macro'

export const Contact = () => {
  return (
    <ContainerColored>
      <div className="contact__headline">Contact</div>
      <div className="contact__details">Ulrika Öhman<br />040-706 1252<br />Send me an <a href="mailto:ulrikalovisa@gmail.com">e-mail</a></div>

      <IconsWrapper>
        <a href="#" target="_blank" rel="noreferrer">
          <img src="/Images/Linkedin-logo-white.svg" alt="Go to my LinkedIn page" />
          <p>LinkedIn</p>
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <img src="/Images/Github-logo-white.svg" alt="Go to my GitHub page" />
          <p>GitHub</p>
        </a>
      </IconsWrapper>
    </ContainerColored>
  )
};

export const ContainerColored = styled.section`
    background-color: var(--color-accent);
    display: block;

    width: 100%;
    height: 50vh;
    left: 0px;
    top: 0px;
    padding: 5px 0 100px 0;

    .contact__headline {
    font-family: var(--font-main);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
    font-size: 20px;
    color: white;
    padding-top: 50px;
}

    .contact__details {
    font-family: var(--font-secondary);
    font-weight: 400;
    text-align: center;
    font-size: 18px;
    line-height: 25px;
    color: white;
    padding: 5vh 0;
    margin: 0;
}

      .contact__details a {
        color: white;
      }
`

const IconsWrapper = styled.div`
    // outline: 1px solid red;
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: var(--color-white);

        :hover {
        transform: scale(1.1);
        }
    }

    img {
        width: 25px;
        height: 25px;
        margin: 0 30px 7px 30px;
    }

    p {
        font-family: var(--font-main);
    }
`