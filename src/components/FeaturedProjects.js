/* eslint-disable no-return-assign */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import { Subheading } from 'GlobalStyles';
import styled from 'styled-components/macro'
import { FrontendProjects } from './FrontendProjects'
import { GraphicDesignProjects } from './GraphicDesignProjects';
import 'index.css'

export const FeaturedProjects = () => {
  const [buttons, setButtons] = useState([
    { label: 'Development', value: false },
    { label: 'Graphic design', value: true }
  ]);

  const handleButtonsChange = () => (label) => {
    const newButtonsState = buttons.map((button) => {
      if (button.label === label) {
        return (button = { label: button.label, value: true });
      }
      return {
        label: button.label,
        value: false
      };
    });
    setButtons(newButtonsState);
  };

  return (
    <>
      <Subheading><span>Featured projects</span></Subheading>
      <SpecialButton {...{ buttons, setButtons, handleButtonsChange }} />
      {buttons[0].value && <FrontendProjects />}
      {buttons[1].value && <GraphicDesignProjects />}
    </>
  );
};

const SpecialButton = ({ buttons, setButtons, handleButtonsChange }) => {
  return (
    <div className="button-container">

      {buttons.map((button, index) => (

        <button
          key={`${button.label}-${index}`}
          onClick={() => handleButtonsChange({ buttons, setButtons })(button.label)}>
          {button.label.toUpperCase()}
        </button>
      ))}

    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<FeaturedProjects />, rootElement);

/* return (
    <OuterWrapperBeige>
      <InnerWrapper>
        <Subheading><span>Featured projects</span></Subheading>

        <ButtonWrapper>
          <button type="button" onClick={handleChange}>Frontend</button>
          <button type="button" onClick={handleChange}>Graphic</button>
        </ButtonWrapper>
      </InnerWrapper>
    </OuterWrapperBeige>
  ) */

export const ButtonWrapper = styled.div`
/*     display: flex;
    align-items: center;
    justify-content: center; */
`

/* export const StyledButton = styled.button`
    background-color: var(--color-accent);
    color: var(--color-white);
    border-style: none;
    padding: 1vh 2vw;
    font-family: var(--font-main);
    font-weight: 700;
    font-size: 18px;
    margin: 0 10px;

    :hover {
        background-color: var(--color-lighterAccent);
    }
` */