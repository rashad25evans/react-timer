import React from 'react';
import { AppProvider } from './context/LengthContext';
import Break from './components/Break';
import Session from './components/Session';
import MediaButtons from './components/Timer';

import './App.css';

const App = () => (
  <main className='App'>
    <AppProvider>
      <span role='img' aria-label='emj'>
        ✨✨ ALIVE! ✨✨
      </span>
      OR
      <span role='img' aria-label='emj'>
        ☠ ☠ DEAD ☠ ☠
      </span>
      <Break />
      <Session />
      <MediaButtons />
    </AppProvider>
  </main>
);

export default App;
