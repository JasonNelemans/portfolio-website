import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import About from './pages/about';
import Footer from './components/footer';
import FullscreenMenu from './components/FullscreenMenu';
import Portfolio from './pages/portfolio';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Wrapper>
        <Content>
          <FullscreenMenu />
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path='/portfolio' component={Portfolio} />
          </Switch>
        </Content>
        <Footer />
      </Wrapper>
    </div>
  );
}

export const GlobalStyles = createGlobalStyle`
  html: 100%;
  body {
    margin: 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.div`
  flex-grow: 1;
`

export default App;
