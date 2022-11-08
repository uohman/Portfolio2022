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
    padding: 0 0 8vh;
`

export const OuterWrapperWhite = styled.section`
    background-color: var(--color-white);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 60px;
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
    margin-top: 8vh;
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

export const Title = styled.h3`
    font-family: var(--font-main);
    font-weight: 700;
    font-size: 22px;
    text-align: left;
    color: var(--color-accent);

    :hover {
      color: var(--color-lighterAccent);
    }
`

export const Description = styled.p`
    font-family: var(--font-secondary);
    font-weight: 400;
    text-align: left;
    font-size: 18px;
    line-height: 20px;
    padding: 10px 0;    
`

export const StyledGrid = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-content: center;
    gap: 30px;
    margin: 0 auto;
    max-width: 50vw;

    @media (max-width: 767.98px){

        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-content: center;
        align-content: center;
        gap: 30px;

    }
`

export const Button = styled.button`
    background-color: var(--color-accent);
    color: var(--color-white);
    border-style: none;
    padding: 1vh 2vw;
    font-family: var(--font-main);
    font-weight: 700;
    font-size: 18px;
    margin: 0 10px;
`

export default GlobalStyles;