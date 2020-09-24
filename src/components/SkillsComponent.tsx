import React from 'react';
import styled from 'styled-components';
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiStyledComponents,
  SiJavascript,
  SiReact,
  SiRedux,
  SiTypescript,
  SiPostgresql,
  SiGraphql,
  SiNodeDotJs,
  SiDocker,
  SiGithub,
  SiGit
} from "react-icons/si";

import BadgeComponent from './BadgeComponent';

export default function SkillsComponent() {
  const iconSize = 55;
  return (
    <>
      <h2>Skills</h2>
      <StyledBadgesWrapper>
        <BadgeComponent name='HTML5'>
          <SiHtml5 size={iconSize} color='#e34c26' />
        </BadgeComponent>
        <BadgeComponent name='CSS3'>
          <SiCss3 size={iconSize} color='#264de4' />
        </BadgeComponent>
        <BadgeComponent name='S-C'>
          <SiStyledComponents size={iconSize} color='#ffcc33' />
        </BadgeComponent>
        <BadgeComponent name='SCSS'>
          <SiSass size={iconSize} color='#CD6799' />
        </BadgeComponent>
        <BadgeComponent name='JavaScript'>
          <SiJavascript size={iconSize} color='#F0DB4F' />
        </BadgeComponent>
        <BadgeComponent name='React'>
          <SiReact size={iconSize} color='#61DBFB' />
        </BadgeComponent>
        <BadgeComponent name='Redux'>
          <SiRedux size={iconSize} color='#764abc' />
        </BadgeComponent>
        <BadgeComponent name='TypeScript'>
          <SiTypescript size={iconSize} color='#007acc' />
        </BadgeComponent>
        <BadgeComponent name='PostgreSQL'>
          <SiPostgresql size={iconSize} color='#336791' />
        </BadgeComponent>
        <BadgeComponent name='GraphQL'>
          <SiGraphql size={iconSize} color='#e535ab' />
        </BadgeComponent>
        <BadgeComponent name='React Native'>
          <SiReact size={iconSize} color='#61DBFB' />
        </BadgeComponent>
        <BadgeComponent name='Node'>
          <SiNodeDotJs size={iconSize} color='#3C873A' />
        </BadgeComponent>
        <BadgeComponent name='Docker'>
          <SiDocker size={iconSize} color='#0db7ed' />
        </BadgeComponent>
        <BadgeComponent name='Git'>
          <SiGit size={iconSize} color='#F1502F' />
        </BadgeComponent>
        <BadgeComponent name='Github'>
          <SiGithub size={iconSize} color='#211F1F' />
        </BadgeComponent>
      </StyledBadgesWrapper>
    </>
  )
}

const StyledBadgesWrapper = styled.div`
  display: flex;
`