import React from 'react';
import {Notifications} from 'react-push-notification'

import AppMobile from './pages/mobile/App'
import AppDesktop from './pages/desktop/App'
import AppTablet from './pages/tablet/App'

import './responsiveness.css'

function App() {
  return (
    <div className="App">
      <Notifications />
      <div className="desktop">
          <AppDesktop />
      </div>

      <div className="tablet">
          <AppTablet />
      </div>

      <div className="mobile">
          <AppMobile />
      </div>
    </div>
  );
}

export default App;
