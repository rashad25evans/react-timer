import React, { createContext, useReducer } from 'react';
import { lengthReducer } from './LengthReducer';
import { LengthInterface, LayoutProps } from '../interfaces/ContextInterface';

const initialTime: LengthInterface = {
  breakLength: 5,
  sessionLength: 25,
  sessionSeconds: 0,
};

const TimeContext = createContext<{
  length: LengthInterface;
  dispatch: React.Dispatch<any>;
}>({
  length: initialTime,
  dispatch: () => null,
});

const AppProvider = (props: LayoutProps) => {
  const [length, dispatch] = useReducer(lengthReducer, initialTime);

  return (
    <TimeContext.Provider value={{ length, dispatch }}>
      {props.children}
    </TimeContext.Provider>
  );
};

export { AppProvider, TimeContext };
