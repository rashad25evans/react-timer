import React from 'react';
import { AppProvider } from './context/TimeContext'
import Break from './components/Break';
import Session from './components/Session';
import MediaButtons from './components/Media';

import './App.css';

const App = () => (
  <div className='App'>
    <AppProvider>
      <span role="img" aria-label="emj">✨✨ ALIVE! ✨✨</span>
      OR
      <span role="img" aria-label="emj">☠ ☠ DEAD ☠ ☠</span>
      <Break />
      <Session />
      <MediaButtons />
    </AppProvider>
  </div>
);

export default App;
