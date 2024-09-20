import React from 'react'
import styled from 'styled-components/macro'
import { OuterWrapperBeige, InnerWrapper } from 'GlobalStyles';
import img from 'Images/Portfolio-image-2.JPG'

export const HeaderImage = () => {
  return (
    <OuterWrapperBeige>
      <InnerWrapper>
        <StyledImages>
          <img className="ProfileImage" src={img} alt="Ulrikas profile" />
          <img className="Stamp" src="/Images/Stamp.svg" alt="Stamp" />
        </StyledImages>

      </InnerWrapper>
    </OuterWrapperBeige>
  )
};

const StyledImages = styled.section`
  position: relative;

  @media (max-width: 767.98px) {
    display: flex;
    justify-content: center;

    img {
      flex-direction: column;
      width: 100%;
    }
  }

  .ProfileImage {
    position: absolute;
    width: 200px;
    height: 200px;
    right: 7%;
    border-radius: 50%;
    object-fit: cover;
    float: right;
    margin-top: 110px;

    @media (max-width: 767.98px) {
      position: relative;
      right: unset;
      width: 60vw;
      height: 60vw;
      margin-top: 5vh;
    }
  }

  .Stamp {
    position: absolute;
    width: 140px;
    height: 140px;
    right: 0;
    top: 230px;
    float: right;
    transition: all 0.6s ease-in-out 0s;

    @media (max-width: 767.98px) {
      display: none;
      /* top: 31vh; */
    }

    @media (min-width: 1400px) {
      /* top: 32vh; */
    }

    :hover {
      cursor: default;
      transform: rotate(180deg);
      transition: all 0.6s ease-in-out 0s;
    }
  }
`
