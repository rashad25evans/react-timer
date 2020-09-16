import React, { useState, useContext } from 'react';
import { TimeContext } from '../context/LengthContext';

const MediaButtons = () => {
  const { length, dispatch } = useContext(TimeContext);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const isRunning = intervalId != null;
  const startTimer = () => {
    if (isRunning) {
      window.clearInterval(intervalId);
      setIntervalId(null);
    } else {
      const newIntervalId = window.setInterval(
        () => dispatch({ type: 'START' }),
        1000
      );
      setIntervalId(newIntervalId);
    }
  };

  return (
    <>
      <div id='timer-label'>Session</div>
      <div id='time-left'>
        {length.sessionLength < 10
          ? '0' + length.sessionLength
          : length.sessionLength}
        :
        {length.sessionSeconds < 10
          ? '0' + length.sessionSeconds
          : length.sessionSeconds}
      </div>
      <button id='start_stop' onClick={startTimer}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button id='reset' onClick={() => dispatch({ type: 'RESET' })}>
        reset
      </button>
    </>
  );
};
export default MediaButtons;
