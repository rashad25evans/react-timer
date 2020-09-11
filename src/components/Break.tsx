import React, { useContext } from 'react';
import { TimeContext } from '../context/TimeContext';

const BreakLength = () => {
  const { state, dispatch } = useContext(TimeContext);

  const decrement = () => {
    dispatch({
      type: 'DECREMENT_BREAK'
    })
  }

  const increment = () => {
    dispatch({
      type: 'INCREMENT_BREAK'
    })
  }
  return (
    <>
      <div id='break-label'>Break Length</div>
      <div id='break-length'>{state.breakLength}</div>
      <button id='break-decrement' onClick={decrement} >break-decrement</button>
      <button id='break-increment' onClick={increment}>break-increment</button>
    </>
  );
};
export default BreakLength;
