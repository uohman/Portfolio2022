/* eslint-disable react/react-in-jsx-scope */
import Carousel from 'nuka-carousel';
import styled from 'styled-components/macro'

import './CarouselSlider.css'

export const CarouselSliderEden = () => {
  return (
    <CarouselWrapper>
      <Carousel>
        <img src="/Images/Eden-flowers-1.png" alt="Eden flowers" />
        <img src="/Images/Eden-flowers-2.png" alt="Eden flowers" />
      </Carousel>
    </CarouselWrapper>
  )
};

export const CarouselSliderBergtagna = () => {
  return (
    <CarouselWrapper>
      <Carousel>
        <img src="/Images/De-bergtagna-1.png" alt="De bergtagna" />
        <img src="/Images/De-bergtagna-2.png" alt="De bergtagna" />
        <img src="/Images/De-bergtagna-3.png" alt="De bergtagna" />
      </Carousel>
    </CarouselWrapper>
  )
};

export const CarouselWrapper = styled.div`
    /* max-width: 200px!important; */
`
