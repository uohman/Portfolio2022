import React from 'react'
import styled from 'styled-components/macro'
import { OuterWrapperBeige, InnerWrapper } from 'GlobalStyles';
import img from 'Images/Portfolio-image.jpg'

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

  .ProfileImage {
    position: absolute;
    width: 200px;
    height: 200px;
    right: 7%;
    border-radius: 50%;
    object-fit: cover;
    float: right;
    margin-top: 14vh;
  }

  .Stamp {
    position: absolute;
    width: 140px;
    height: 140px;
    right: 0;
    top: 32vh;
    float: right;
    transition: all 0.6s ease-in-out 0s;

    :hover {
      cursor: default;
    transform: rotate(180deg);
    transition: all 0.6s ease-in-out 0s;
    }
  }
`
