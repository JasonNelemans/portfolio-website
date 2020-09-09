import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

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
      <p>Copyright © 2020 | Nelemans</p>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  border-top: 1px solid black;
  text-align: center;
  padding-bottom: 5px;
  background-color: #102B3F;

  svg {
    margin: 5px 10px;

  }

  a {
    color: white;
  }

  p {
    margin: 0;
    color: white;
  }
`