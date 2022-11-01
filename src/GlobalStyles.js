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

export const OuterWrapperBlue = styled.section`
    background-color: var(--color-background);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 0;
`

export const OuterWrapperWhite = styled.section`
    background-color: var(--color-white);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 0;
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
    padding-bottom: 2vh;
    color: var(--color-accent);
`

export const StyledGrid = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr; 
    justify-content: center;
    align-content: center;
    gap: 30px;
    margin: 50px auto;
    max-width: 50vw;
    

    @media (max-width: 767.98px){
        
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-content: center;
        align-content: center;
        gap: 30px;
        
    }
`

export default GlobalStyles;