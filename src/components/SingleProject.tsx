import React from 'react';
import styled from 'styled-components';

export default function SingleProject(props: any) {
  console.log('props in SingleProject', props);
  const compWidth = 50;
  const compHeight = compWidth - 20;

  return (
    <StyledProject>
      <StyledProjectBar>
        <StyledBarDots color='#ff5f57' />
        <StyledBarDots color='#ffbd2e' />
        <StyledBarDots color='#28ca41' />
      </StyledProjectBar>
      <StyledProjectWindow>
        <StyledImage src={props.image} />
      </StyledProjectWindow>
    </StyledProject>
  )
};

interface StyledProject {
  width: any;
  height: any
}

const StyledProject = styled.div`
  max-width: 50%;
`

const StyledProjectBar = styled.div`
  border-bottom: 0;
  width: 100%;
  height: 15px;

  display: flex;
  align-items: center;
  background-color: #ddd;
`

const StyledBarDots = styled.div`
  border-radius: 50%;
  height: 5px;
  width: 5px;
  background-color: ${props => props.color};
  margin-left: 3px;
`

const StyledProjectWindow = styled.div`
`

const StyledImage = styled.img`
  width: 100%;
  height: 350px;
`