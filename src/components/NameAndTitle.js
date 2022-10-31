import React from 'react'
import styled from 'styled-components/macro'

export const NameAndTitle = () => {
  return (
    <NameAndTitleContainer>
      <h4>Ulrika Öhman</h4>
      <h5>— frontend developer & graphic designer</h5>
    </NameAndTitleContainer>
  )
};

const NameAndTitleContainer = styled.section`
    // outline: 1px solid red;
    margin-top: 20px;
  `