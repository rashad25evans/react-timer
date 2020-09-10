import { createContext } from 'react';

const timeContext = createContext({
  breakLength: 5,
  sessionMinutes: 25,
  sessionSeconds: '00',
});

export default timeContext;
