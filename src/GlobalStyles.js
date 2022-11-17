import styled, { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

/* export const OuterWrapper = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
` */

export const OuterWrapperBeige = styled.section`
    background-color: var(--color-background);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 10vh;
`

export const OuterWrapperWhite = styled.section`
    background-color: var(--color-white);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 10vh;
`
export const InnerWrapper = styled.section`
    width: 65vw;
    margin: 0 auto;
`

export const Subheading = styled.h2`
    font-family: var(--font-main);
    font-weight: 700;
    text-align: center;
    font-size: 30px;
    margin-top: 10vh;
    padding-bottom: 2vh;
    color: var(--color-accent);
`

export const SecondSubheading = styled.h3`
    font-family: var(--font-main);
    font-weight: 400;
    text-align: center;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding-bottom: 2vh;
    color: var(--color-accent);
`

export const Description = styled.p`
    font-family: var(--font-secondary);
    font-weight: 400;
    text-align: left;
    font-size: 18px;
    line-height: 20px;
    padding: 10px 0;    
`

export default GlobalStyles;