import React from 'react'
import { OuterWrapper, InnerWrapper } from 'GlobalStyles'
import { NameAndTitle } from 'components/NameAndTitle'
import { Icons } from 'components/Icons'
import { Tech } from 'components/Tech'
import { HeaderText } from 'components/HeaderText'
import { HeaderImage } from './HeaderImage'
import { FeaturedProjects } from './FeaturedProjects'

/*
import { Thoughts } from 'components/Thoughts'
import { Skills } from 'components/Skills'
import { Contact } from 'components/Contact' */

export const PortfolioWrapper = () => {
  return (
    <div>
      <OuterWrapper>
        <Icons />
        <InnerWrapper>
          <NameAndTitle />
          <HeaderImage />
          <HeaderText />
          <Tech />
          <FeaturedProjects />
        </InnerWrapper>
      </OuterWrapper>
    </div>
  )
};