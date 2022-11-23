/* eslint-disable max-len */
import React from 'react'
import { InnerWrapper, OuterWrapperBeige, Subheading } from 'GlobalStyles';
import styled from 'styled-components/macro'

export const Skills = () => {
  return (
    <OuterWrapperBeige>
      <InnerWrapper>
        <Subheading><span>Skills</span></Subheading>
        <StyledSkills>
          <div className="column1">
            <div className="column__headline">Code</div>
            <div className="column__skills">
            HTML5<br />CSS3<br />JavaScript ES6<br />React<br />Redux<br />Node.js<br />Express<br />MongoDB<br />Styled Components<br />GitHub
            </div>
          </div>

          <div className="column2">
            <div className="column__headline">Toolbox</div>
            <div className="column__skills">
            Adobe Photoshop<br />Adobe Illustrator<br />Adobe InDesign<br />
            Figma<br />Postman<br />Keynote<br />Slack
            </div>
          </div>

          <div className="column3">
            <div className="column__headline">More</div>
            <div className="column__skills">
            Graphic design<br />Branding<br />Packaging design<br />
            Concept development<br />Agile methodology
            </div>
          </div>
        </StyledSkills>
      </InnerWrapper>
    </OuterWrapperBeige>
  )
};

export const StyledSkills = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 3vh auto 0;
    max-width: 768px;

    .column1, .column2, .column3 {
        flex: 33.33%;
        text-align: center;
        min-width: 120px;
    }
 
            .column__headline{
                font-family: var(--font-secondary);
                font-weight: 400;
                text-align: center;
                font-size: 18px;
                line-height: 20px;
                text-transform: uppercase;
                letter-spacing: 1px;
                // padding: 15px 0 5px; 
                color: var(--color-accent)
            }

            .column__skills{
                font-family: var(--font-secondary);
                font-weight: 400;
                text-align: center;
                font-size: 18px;
                line-height: 22px;
                padding: 10px 0; 
            }

    @media (max-width: 767.98px){
    flex-wrap: wrap;

        .column1, .column2 {
          margin-bottom: 10px;
        }
    }
`