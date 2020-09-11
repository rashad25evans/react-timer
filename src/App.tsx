import React from 'react';
import { AppProvider } from './context/TimeContext'
import Break from './components/Break';
import Session from './components/Session';

import './App.css';

const App = () => (
  <div className='App'>
    <AppProvider>
      <Break />
      <Session />
    </AppProvider>
  </div>
);

export default App;
