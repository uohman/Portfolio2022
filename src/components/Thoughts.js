import React from 'react'
import { InnerWrapper, OuterWrapperWhite, Subheading, Description } from 'GlobalStyles';
import styled from 'styled-components/macro'
import thoughtOneImage from 'Images/My-thoughts-1.png'
import placeHolderImage from 'Images/Placeholder-img.png'

export const Thoughts = () => {
  return (
    <OuterWrapperWhite>
      <InnerWrapper>
        <Subheading><span>My thoughts about code</span></Subheading>
        <StyledGrid>

          <ItemWrapper>
            <a href="https://medium.com/@ulrikalovisa/my-crush-on-coding-534682bd3d" target="_blank" rel="noreferrer">
              <div className="thought__image"><img src={thoughtOneImage} alt="My crush on coding" /></div>
              <div className="thought__text" />
              <div className="thought__date">October 2022</div>
              <Title>My crush on coding</Title>
              <Description>
                My journey into coding and how I feel about it 8 weeks into the boot camp.
                (Spoiler alert: I love it!)
              </Description>
            </a>
          </ItemWrapper>

          <ItemWrapper>
            <a href="#" target="_blank" rel="noreferrer">
              <div className="thought__image"><img
                src={placeHolderImage}
                alt="My crush on coding" />
              </div>
              <div className="thought__text" />
              <div className="thought__date">October 2022</div>
              <Title>Thought 2 headline</Title>
              <Description>
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Description>
            </a>
          </ItemWrapper>

        </StyledGrid>

      </InnerWrapper>
    </OuterWrapperWhite>
  )
};

export const StyledGrid = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-content: center;
    gap: 30px;
    margin: 0 auto;
    max-width: 50vw;

    @media (max-width: 767.98px){

        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-content: center;
        align-content: center;
        gap: 30px;
    }
`

export const ItemWrapper = styled.div`
    margin: 5vh 0 2vh;

    .thought__image img{
            width: 32vw;
            height: auto;
        }

        .thought__date{
            font-family: var(--font-secondary);
            font-weight: 400;
            text-align: left;
            font-size: 16px;
            line-height: 20px;
            text-transform: uppercase;
            letter-spacing: 1px;
            padding: 15px 0 0;
            color: var(--color-accent)
        }

        a {
        text-decoration: none;
        color: black;
    }

`

export const Title = styled.h3`
    font-family: var(--font-main);
    font-weight: 700;
    font-size: 22px;
    text-align: left;
    color: var(--color-accent);

    :hover {
      color: var(--color-lighterAccent);
    }
`