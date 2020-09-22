import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

import colors from '../config/colors';

export default function Footer() {
  const iconSize = 18
  return (
    <FooterContainer>
      <p>
        <a href="https://www.linkedin.com/in/jasonnelemans/">
          <FaLinkedin size={iconSize} />
        </a>
        <a href="https://github.com/JasonNelemans">
          <FaGithub size={iconSize} />
        </a>
        <a href="mailto:jasonnelemans@hotmail.com">
          <FaEnvelope size={iconSize} /></a>
      </p>
      <p>Copyright © 2020 | Jason Nelemans</p>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  border-top: 1px solid black;
  text-align: center;
  padding: 10px;
  background-color: ${colors.blue};
  z-index: 3;

  svg {
    margin: 5px 10px;

  }

  a {
    color: ${colors.white};
  }

  p {
    margin: 0;
    color: ${colors.white};
  }
`