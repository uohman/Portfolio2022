import React from 'react'
import styled from 'styled-components/macro'
import img from 'Images/Portfolio-image.jpg'

export const HeaderImage = () => {
  return (
    <StyledImage>
      <img src={img} alt="Ulrikas profile" />
    </StyledImage>
  )
};

const StyledImage = styled.section`
  position: relative;

  img {
        position: absolute;
        width: 200px;
        height: 200px;
        right: 5%;
        border-radius: 50%;
        object-fit: cover;
        float: right;
        margin-top: 20px;
  }
`
