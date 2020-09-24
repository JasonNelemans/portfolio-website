import React from 'react';
import styled from 'styled-components';

import colors from '../config/colors';
import SkillsComponent from '../components/SkillsComponent';

export default function Portfolio() {
  const iconSize = 55
  return (
    <StyledPortfolioWrapper>
      <h1>Portfolio</h1>
      <SkillsComponent />
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