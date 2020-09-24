import React from 'react';
import styled from 'styled-components';

export default function SingleProject() {
  return (
    <StyledProject>
      <StyledProjectBar>
        <StyledBarDots color='#ff5f57' />
        <StyledBarDots color='#ffbd2e' />
        <StyledBarDots color='#28ca41' />
      </StyledProjectBar>
      <StyledProjectWindow>

      </StyledProjectWindow>
    </StyledProject>
  )
};

const StyledProject = styled.div`
`

const StyledProjectBar = styled.div`
  border: 1px solid grey;
  border-bottom: 0;
  width: 150px;
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
  border: 1px solid grey;
  width: 150px;
  height: 100px;
`