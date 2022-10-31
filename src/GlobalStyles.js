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
    width: 65vw;
    margin: 0 auto;
`

export const ContainerWhite = styled.section`
    background-color: var(--color-white);
    padding: 50px 0;
`

export const Subheading = styled.h2`
    font-family: var(--font-main);
    font-weight: 700;
    text-align: center;
    font-size: 30px;
    padding-bottom: 2vh;
    color: var(--color-blue);
`

export default GlobalStyles;