import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './pages/about'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={About} />
      </Switch>
    </div>
  );
}

export default App;
