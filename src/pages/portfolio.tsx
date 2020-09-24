import React from 'react';
import styled from 'styled-components';

import colors from '../config/colors';
import SkillsComponent from '../components/SkillsComponent';
import ProjectsComponent from '../components/ProjectsComponent';

export default function Portfolio() {
  return (
    <StyledPortfolioWrapper>
      <h1>Portfolio</h1>
      <SkillsComponent />
      <div className='divider' />
      <ProjectsComponent />
    </StyledPortfolioWrapper>
  )
}

const StyledPortfolioWrapper = styled.div`
  margin: 10px;  
h2 {
   margin-top: 20px;
   margin-bottom: 10px;
  }

  .divider {
    height: 30px;
  }
`