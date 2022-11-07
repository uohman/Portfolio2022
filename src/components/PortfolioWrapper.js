import React from 'react'
import { NameAndTitle } from 'components/NameAndTitle'
import { Icons } from 'components/Icons'
import { Tech } from 'components/Tech'
import { HeaderText } from 'components/HeaderText'
import { Thoughts } from 'components/Thoughts'
import { Skills } from 'components/Skills'
import { Contact } from 'components/Contact'
import { HeaderImage } from './HeaderImage'
import { FrontendProjects } from './FrontendProjects'

export const PortfolioWrapper = () => {
  return (
    <div>
      <Icons />
      <NameAndTitle />
      <HeaderImage />
      <HeaderText />
      <Tech />
      <FrontendProjects />
      <Thoughts />
      <Skills />
      <Contact />
    </div>
  )
};