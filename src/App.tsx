import React from 'react';
import { AppProvider } from './context/TimeContext'
import Break from './components/Break';
import Session from './components/Session';
import MediaButtons from './components/Media';

import './App.css';

const App = () => (
  <div className='App'>
    <AppProvider>
      ✨✨ ALIVE! ✨✨
      OR
      ☠ ☠ DEAD ☠ ☠
      <Break />
      <Session />
      <MediaButtons />
    </AppProvider>
  </div>
);

export default App;
