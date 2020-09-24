import React from 'react';
import styled from 'styled-components';

import SingleProject from './SingleProject';
import ghiImage from '../images/globalhealthinclusive-screenshot.png';
import SchrijversImage from '../images/Schrijvers-screenshot.png';

export default function ProjectsComponent() {
  return (
    <>
      <h2>Projects</h2>
      <ProjectsComponentWrapper>
        <SingleProject image={ghiImage} />
        <SingleProject image={SchrijversImage} />
      </ProjectsComponentWrapper>
    </>
  )
}

const ProjectsComponentWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`
