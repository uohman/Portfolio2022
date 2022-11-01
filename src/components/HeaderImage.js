import React from 'react'
import styled from 'styled-components/macro'
import { OuterWrapperBlue, InnerWrapper } from 'GlobalStyles';
import img from 'Images/Portfolio-image.jpg'

export const HeaderImage = () => {
  return (
    <OuterWrapperBlue>
      <InnerWrapper>
        <StyledImages>
          <img className="ProfileImage" src={img} alt="Ulrikas profile" />
          <img className="Stamp" src="/Images/Stamp.svg" alt="Stamp" />
        </StyledImages>

      </InnerWrapper>
    </OuterWrapperBlue>
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
  }

  .Stamp {
    position: absolute;
    width: 150px;
    height: 150px;
    right: 0;
    top: 140px;
    float: right;
  }
`
