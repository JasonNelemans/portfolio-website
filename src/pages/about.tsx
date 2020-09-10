import React from 'react';
import styled from 'styled-components';

import picture from '../images/JasonPF.jpg'

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
            <strong> Do you relate?</strong> Let's have a <a href="">chat.</a>
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
  display: flex;
  position: fixed;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);

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

  h1, h2 {
    margin: 0;
    color: #102B3F;
  }

  span {
    color: #C89933;
  }
  
  .text {
    line-height: 1.5;
    color: #102B3F;
    
    strong {
      color: #53131E;
    }
  }

  a {
    color: #102B3F;
  }

  @media (max-width: 900px) {
    margin-left: 0;
  }
`

const Button = styled.div`
  border: 2px solid #797D81;
  color: #797D81;
  border-radius: 3px;
  display: inline-block;
  padding: 5px;
  cursor: pointer;
  transition: all .2s ease-in-out;

  &:hover {
    color: #fff;
    background-color: #797D81;
    transform: scale(1.1);
  }
`;