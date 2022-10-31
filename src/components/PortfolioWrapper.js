import React from 'react'
import { OuterWrapper, InnerWrapper } from 'GlobalStyles'
import { Tech } from 'components/Tech'
import { AboutMe } from 'components/AboutMe'
import { Header } from 'components/Header'
/*
import { Thoughts } from 'components/Thoughts'
import { Skills } from 'components/Skills'
import { Contact } from 'components/Contact'
import { FeaturedProjects } from './FeaturedProjects' */

export const PortfolioWrapper = () => {
  return (
    <div>
      <OuterWrapper>
        <InnerWrapper>
          <Header />
          <AboutMe />
          <Tech />
        </InnerWrapper>
      </OuterWrapper>
    </div>
  )
};