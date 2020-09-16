import React, { useContext } from 'react';
import { TimeContext } from '../context/LengthContext';

const Break = () => {
  const { length, dispatch } = useContext(TimeContext);

  return (
    <>
      <div id='break-label'>Break Length</div>
      <div id='break-length'>{length.breakLength}</div>
      <button
        id='break-decrement'
        onClick={() => dispatch({ type: 'DECREMENT_BREAK' })}
        value='-'
      >
        break-decrement
      </button>
      <button
        id='break-increment'
        onClick={() => dispatch({ type: 'INCREMENT_BREAK' })}
        value='+'
      >
        break-increment
      </button>
    </>
  );
};
export default Break;
