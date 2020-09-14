import React from 'react'
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa'

export default function Navbar() {
  return (
    <StyledNavbar>
      <FaBars size={35} color='#797D81' />
    </StyledNavbar>
  )
}

const StyledNavbar = styled.div`
  position: sticky;
  display: flex;
  justify-content: flex-end;
  margin-top: 25px;
  margin-right: 35px;
`