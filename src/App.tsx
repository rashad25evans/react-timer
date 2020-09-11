import React from 'react';
import { AppProvider } from './context/TimeContext'
import Break from './components/Break';
import Session from './components/Session';

import './App.css';
import MediaButtons from './components/Media';

const App = () => (
  <div className='App'>
    <AppProvider>
      <Break />
      <Session />
      <MediaButtons />
    </AppProvider>
  </div>
);

export default App;
