import React, { useContext } from 'react';
import { TimeContext } from '../context/TimeContext';

const Session = () => {
  const { time, dispatch } = useContext(TimeContext);

  return (
    <>
      <div id='session-label'>Session Length</div>
      <div id='session-length'>{time.sessionMinutes}</div>
      <button id='session-decrement' onClick={() => dispatch({ type: 'DECREMENT_SESSION' })}>session-decrement</button>
      <button id='session-increment' onClick={() => dispatch({ type: 'INCREMENT_SESSION' })}>session-increment</button>
    </>
  );
};
export default Session;
