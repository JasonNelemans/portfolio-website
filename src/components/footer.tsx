import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterContainer>
      This is the footer.
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  border-top: 1px solid black;
  text-align: center;
`