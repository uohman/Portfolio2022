import React from 'react'
import { OuterWrapper, InnerWrapper } from 'GlobalStyles'
import { Tech } from 'components/Tech'
/* import { Header } from 'components/Header'
import { AboutMe } from 'components/Summary'
import { Thoughts } from 'components/Thoughts'
import { Skills } from 'components/Skills'
import { Contact } from 'components/Contact'
import { FeaturedProjects } from './FeaturedProjects' */

export const PortfolioWrapper = () => {
  return (
    <div>
      <OuterWrapper>
        <InnerWrapper>
          <Tech />
        </InnerWrapper>
      </OuterWrapper>
    </div>
  )
};