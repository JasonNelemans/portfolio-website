import React from 'react';
import styled from 'styled-components';

import colors from '../config/colors';

export default function BadgeComponent(props: any) {
  return (
    <StyledBadge>
      <label>
        {props.children}
        <input
          type='radio'
          name='skill'
          value={props.name}
          onClick={(e: any) => console.log(e.target.value, 'was clicked!')}
        />
        <p>{props.name}</p>
      </label>
    </StyledBadge>
  )
}

const StyledBadge = styled.div`
  text-align: center;
  margin: 7px;
  font-family: sans-serif;

  p {
    margin: 0;
    color: ${colors.blue}
  }

  input[type="radio"] {
    display: none;
  }
  
`
