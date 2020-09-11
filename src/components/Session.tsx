import React, { useContext } from 'react';
import { TimeContext } from '../context/TimeContext';

const Session = () => {
  const { state, dispatch } = useContext(TimeContext);

  const decrement = () => {
    dispatch({
      type: 'DECREMENT_SESSION'
    })
  }

  const increment = () => {
    dispatch({
      type: 'INCREMENT_SESSION'
    })
  }
  return (
    <>
      <div id='session-label'>Session Length</div>
      <div id='session-length'>{state.sessionMinutes}</div>
      <button id='session-decrement' onClick={decrement}>session-decrement</button>
      <button id='session-increment' onClick={increment}>session-increment</button>
    </>
  );
};
export default Session;
