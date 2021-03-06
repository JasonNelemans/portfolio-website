import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion"

export default function FullscreenMenu() {
  const [open, setOpen] = useState(false);

  return (
    <FullscreenMenuContainer>
      {open && <div className="FullscreenMenu">
        <ul>
          {['About', 'Portfolio', 'Contact'].map((text, i) => {
            return (
              <li key={i} style={{ animationDelay: `${100 * i}ms` }}>
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
        style={{ color: open ? '#C89933' : '#797D81' }}
        onClick={() => setOpen(!open)}
      >
        <svg width="2rem" height="2rem" viewBox="0 0 24 24">
          <g stroke="currentColor" strokeWidth={2}>
            <motion.line
              x1="0" y1="4" x2="24" y2="4"
              animate={{
                x1: open ? 4 : 0,
                x2: open ? 20 : 24,
                y2: open ? 20 : 4
              }}
            />
            <motion.line
              x1="0" y1="12" x2="24" y2="12"
              animate={{
                x1: open ? 12 : 0,
                x2: open ? 12 : 24
              }}
            />
            <motion.line
              x1="0" y1="20" x2="24" y2="20"
              animate={{
                x1: open ? 4 : 0,
                x2: open ? 20 : 24,
                y2: open ? 4 : 20
              }}
            />
          </g>
        </svg>
      </StyledButton>
    </FullscreenMenuContainer>
  )
}

const StyledButton = styled.button`
  z-index: 5;
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
    z-index: 4;
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

      animation: slideInFromLeft 0.5s ease backwards;
    }

    @keyframes slideInFromLeft {
      0% {
        opacity: 0;
        transform: translate(-1.5rem, 0);
      }
      100% {
        opacity: 1;
        transform: translate(0, 0);
      }
    }

    a {
      color: #fff;
      font-weight: bold;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
      text-decoration-color: #C89933;
    }
  }
`
