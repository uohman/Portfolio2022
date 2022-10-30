import styled, { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const OuterWrapper = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const InnerWrapper = styled.section`
    width: 80%;
    margin: 0 auto;
`

export const ContainerWhite = styled.section`
    background-color: #ffffff;
`

export const Subheading = styled.h2`
    font-family: 'Circular Std', sans-serif;
    font-weight: 700;
    text-align: center;
    font-size: 25px;
    color: #1322D5;
`

export default GlobalStyles;