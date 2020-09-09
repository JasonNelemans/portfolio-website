import React from 'react';
import styled from 'styled-components';

import picture from '../images/JasonPF.jpg'

export default function About() {
  return (
    <AboutContainer>
      <ContentContainer>
        <img src={picture} alt="profile" />
        <TextContainer>
          <h1><span>Hi,</span> my name is Jason.</h1>
          <h2>Nice to meet <span>you.</span></h2>
          <p className="text">
            Currently, I am a junior <strong>front-end developer</strong> (aspiring to a complete full stack) and open for opportunities.
            I seek environments where I can share my <strong>passion for technology</strong> and life in general.
            Software development has captured my heart and the more I learn the more I grow fond of it.
            <strong> Do you relate?</strong> Let's talk about it.
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
    margin-right: 40px;  
    margin-top: 6px;  
  }
`

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;

`

const TextContainer = styled.div`
  margin-left: 30px;
  max-width: 400px;

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
`

const Button = styled.div`
  border: 2px solid #797D81;
  color: #fff;
  border-radius: 3px;
  display: inline-block;
  padding: 5px;
  background-color: #797D81;
  cursor: pointer;
`;