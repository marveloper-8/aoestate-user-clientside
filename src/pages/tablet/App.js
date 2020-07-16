import React from 'react';
import Navigation from './Navigation'
import Footer from './Footer'

import Home from './Home'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>

        <Footer />
        
      </Router>
    </div>
  );
}

export default App;
