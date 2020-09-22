import React from 'react';
import styled from 'styled-components';

import picture from '../images/JasonPF.jpg';
import colors from '../config/colors';

export default function About() {
  return (
    <AboutContainer>
      <ContentContainer>
        <img src={picture} alt="profile" />
        <TextContainer>
          <div className="header">
            <h1><span>Hi,</span> my name is Jason.</h1>
            <h2>Nice to meet <span>you.</span></h2>
          </div>
          <p className="text">
            Currently, I am a junior <strong>front-end developer</strong> (aspiring to a complete full stack) and open for opportunities.
            I seek environments where I can share my <strong>passion for technology</strong> and life in general.
            Software development has captured my heart and the more I learn, the more I grow fond of it.
            <strong> Like anything you hear?</strong> Then let's have a <a href="#">chat.</a>
          </p>
          <Button>
            Visit portfolio
          </Button>
        </TextContainer>
      </ContentContainer>
    </AboutContainer>
  )
}

const AboutContainer = styled.div`
  img {
    height: 280px;
    width: 211px;
    margin-top: 6px;  
  }
`

const ContentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-bottom: 150px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    position: static;
    transform: translate(0, 0);
    top: 0;
    left: 0;

    align-items: center;
    text-align: center;
    justify-content: center;

    .header {
      margin-top: 40px;
    }

    .text {
      margin: 25px 10px 35px;
    }

    img {
      margin-top: 45px;
      margin-bottom: 60px;
    }
  }
`

const TextContainer = styled.div`
  margin-left: 30px;
  max-width: 400px;

  h1, h2 {
    margin: 0;
    color: ${colors.blue};
  }

  span {
    color: ${colors.gold};
  }
  
  .text {
    margin-top: 16px;
    line-height: 1.5;
    color: ${colors.blue};
    
    strong {
      color: ${colors.sienna};
    }
  }

  a {
    color: ${colors.blue};
  }

  @media (max-width: 900px) {
    margin-left: 0;
  }
`

const Button = styled.div`
  border: 2px solid ${colors.gray};
  color: ${colors.gray};
  border-radius: 3px;
  display: inline-block;
  padding: 5px;
  cursor: pointer;
  transition: all .2s ease-in-out;
  margin-top: 7px;

  &:hover {
    color: ${colors.white};
    background-color: ${colors.gray};
    transform: scale(1.1);
  }
`;