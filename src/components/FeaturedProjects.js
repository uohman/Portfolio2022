/* eslint-disable no-return-assign */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Subheading } from 'GlobalStyles';
import { FrontendProjects } from './FrontendProjects';
import { GraphicDesignProjects } from './GraphicDesignProjects';
import 'index.css';

export const FeaturedProjects = () => {
  const [buttons, setButtons] = useState([
    { label: 'Development', value: true },
    { label: 'Graphic design', value: false }
  ]);

  const handleButtonsChange = (label) => {
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
      <Subheading>
        <span>Featured projects</span>
      </Subheading>
      <SpecialButton {...{ buttons, handleButtonsChange }} />
      {buttons[0].value && <FrontendProjects />}
      {buttons[1].value && <GraphicDesignProjects />}
    </>
  );
};

const SpecialButton = ({ buttons, handleButtonsChange }) => {
  return (
    <div className="button-container">
      {buttons.map((button, index) => (
        <button
          key={`${button.label}-${index}`}

          style={{
            opacity: button.value ? '1' : '0.5',
            textDecoration: button.value ? 'underline' : 'none'
          }}

          onClick={() => handleButtonsChange(button.label)}>
          {button.label.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<FeaturedProjects />, rootElement);
