import React from 'react'
import { InnerWrapper, OuterWrapperWhite, Subheading, Description, StyledGrid } from 'GlobalStyles';
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
              <div className="thought__title">My crush on coding</div>
              <Description>
                My journey into coding and how I feel about it 8 weeks into the boot camp.
                (Spoiler alert: I love it!)
              </Description>
            </a>
          </ItemWrapper>

          <ItemWrapper>
            <a href="#" target="_blank" rel="noreferrer">
              <div className="thought__image"><img src={placeHolderImage} alt="My crush on coding" /></div>
              <div className="thought__text" />
              <div className="thought__date">October 2022</div>
              <div className="thought__title">Thought 2 headline</div>
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

export const ItemWrapper = styled.div`
    margin: 5vh 0;

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
            padding: 15px 0 5px; 
            color: var(--color-accent)
        }

        .thought__title{
            font-family: var(--font-secondary);
            font-weight: 400;
            text-align: left;
            font-size: 20px;
            border-bottom: 2px solid;
        }

        a {
        text-decoration: none;
        color: black;
    }

`