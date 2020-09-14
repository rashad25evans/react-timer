import React, { useContext } from 'react';
import { TimeContext } from '../context/TimeContext';

const Break = () => {
  const { time, dispatch } = useContext(TimeContext);

  return (
    <>
      <div id='break-label'>Break Length</div>
      <div id='break-length'>{time.breakLength}</div>
      <button id='break-decrement' onClick={() => dispatch({ type: 'DECREMENT_BREAK' })} value="-">break-decrement</button>
      <button id='break-increment' onClick={() => dispatch({ type: 'INCREMENT_BREAK' })} value="+">break-increment</button>
    </>
  );
};
export default Break;
