import React from 'react';
import styled from 'styled-components';
import { SiHtml5, SiCss3, SiSass, SiStyledComponents } from "react-icons/si";

import colors from '../config/colors';
import BadgeComponent from '../components/BadgeComponent';

export default function Portfolio() {
  const iconSize = 45
  const iconColor = colors.white
  return (
    <StyledPortfolioWrapper>
      <h1>Portfolio</h1>
      <h2>Skills</h2>
      <StyledBadgesWrapper>
        <BadgeComponent name='HTML5'>
          <SiHtml5 size={iconSize} color='#e34c26' />
        </BadgeComponent>
        <BadgeComponent name='CSS3'>
          <SiCss3 size={iconSize} color='#264de4' />
        </BadgeComponent>
        <BadgeComponent name='SCSS'>
          <SiSass size={iconSize} color='#CD6799' />
        </BadgeComponent>
        <BadgeComponent name='S-C'>
          <SiStyledComponents size={iconSize} color='	#ffcc33' />
        </BadgeComponent>
      </StyledBadgesWrapper>
    </StyledPortfolioWrapper>
  )
}

const StyledPortfolioWrapper = styled.div`
 h2 {
   margin-top: 20px;
   margin-bottom: 10px;
 }
`

const StyledBadgesWrapper = styled.div`
 display: flex;
`