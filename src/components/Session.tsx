import React, { useContext } from 'react';
import { TimeContext } from '../context/LengthContext';

const Session = () => {
  const { length, dispatch } = useContext(TimeContext);

  return (
    <>
      <div id='session-label'>Session Length</div>
      <div id='session-length'>
        {length.sessionLength < 10
          ? '0' + length.sessionLength
          : length.sessionLength}
      </div>
      <button
        id='session-decrement'
        onClick={() => dispatch({ type: 'DECREMENT_SESSION' })}
        value='-'
      >
        session-decrement
      </button>
      <button
        id='session-increment'
        onClick={() => dispatch({ type: 'INCREMENT_SESSION' })}
        value='+'
      >
        session-increment
      </button>
    </>
  );
};
export default Session;
