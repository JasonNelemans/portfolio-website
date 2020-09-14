import React, { useState } from 'react';
import styled from 'styled-components';

export default function FullscreenMenu() {
  const [open, setOpen] = useState(false);

  return (
    <FullscreenMenuContainer>
      {open && <div className="FullscreenMenu">
        <ul>
          {['About', 'Portfolio', 'Contact'].map((text, i) => {
            return (
              <li key={i}>
                <a
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    setOpen(false);
                  }}
                >
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>}
      <StyledButton
        style={{ color: open ? '#fff' : '#797D81' }}
        onClick={() => setOpen(!open)}
      >
        <svg width="2rem" height="2rem" viewBox="0 0 24 24">
          <g stroke="currentColor" strokeWidth={2}>
            <line x1="0" y1="4" x2="24" y2="4" />
            <line x1="0" y1="12" x2="24" y2="12" />
            <line x1="0" y1="20" x2="24" y2="20" />
          </g>
        </svg>
      </StyledButton>
    </FullscreenMenuContainer>
  )
}

const StyledButton = styled.button`
  z-index: 7;
  position: fixed;
  top: 1.3rem;
  right: 1.7rem;
  border: none;
  background: none;
  display: flex;
  outline: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  color: black;
  transition: all 0.2s ease;
`

const FullscreenMenuContainer = styled.div`
  .FullscreenMenu {
    z-index: 6;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-bottom: 150px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #102B3F;
    color: #C89933;

    font-size: 3rem;
    font-family: sans-serif;

    ul {
      display: block;
      margin: 0;
      padding: 0;
    }

    li {
      display: block;
      margin: 1rem;
    }

    a {
      color: #C89933;;
      font-weight: bold;
      text-decoration: none;
      transition: all .2s ease-in-out;
    }

    a:hover {
      text-decoration: underline;
      color: #fff;
    }
  }
`
