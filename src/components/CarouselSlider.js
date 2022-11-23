/* eslint-disable react/react-in-jsx-scope */
import Carousel from 'nuka-carousel';
import styled from 'styled-components/macro'

export const CarouselSliderEden = () => {
  return (
    <CarouselWrapper>
      <Carousel>
        <img src="/Images/Eden-flowers-2.png" alt="Eden flowers" />
        <img src="/Images/Eden-flowers-1.png" alt="Eden flowers" />
        <img src="/Images/Eden-flowers-3.png" alt="Eden flowers" />
      </Carousel>
    </CarouselWrapper>
  )
};

export const CarouselSliderBergtagna = () => {
  return (
    <CarouselWrapper>
      <Carousel>
        <img src="/Images/De-bergtagna-3.png" alt="De bergtagna" />
        <img src="/Images/De-bergtagna-1.png" alt="De bergtagna" />
        <img src="/Images/De-bergtagna-2.png" alt="De bergtagna" />
      </Carousel>
    </CarouselWrapper>
  )
};

export const CarouselSliderDuellen = () => {
  return (
    <CarouselWrapper>
      <Carousel>
        <img src="/Images/Duellen-1.png" alt="Duellen" />
        <img src="/Images/Duellen-2.png" alt="Duellen" />
        <img src="/Images/Duellen-3.png" alt="Duellen" />
      </Carousel>
    </CarouselWrapper>
  )
};

export const CarouselWrapper = styled.div`
    margin: 5vh 0 3vh; 
    z-index: 1;
`
