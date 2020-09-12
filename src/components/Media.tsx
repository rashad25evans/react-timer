import React, { useContext } from 'react';
import { TimeContext } from '../context/TimeContext';

const MediaButtons = () => {
  const { time, dispatch } = useContext(TimeContext);


  return (
    <>
      <div id="timer-label">Session</div>
      <div id="time-left">{time.sessionMinutes}:{time.sessionSeconds}</div>
      <button id="start_stop" onClick={() => dispatch({ type: 'START' })}>start</button>
      <button id="reset" onClick={() => dispatch({ type: 'RESET' })}>reset</button>
    </>
  );
};
export default MediaButtons;
