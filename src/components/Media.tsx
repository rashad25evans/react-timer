import React, { useContext } from 'react';
import { TimeContext } from '../context/TimeContext';

const MediaButtons = () => {
  const { state, dispatch } = useContext(TimeContext);


  return (
    <>
      <div id="timer-label">Session</div>
      <div id="time-left">{state.sessionMinutes}:{state.sessionSeconds}</div>
      <button id="start_stop">start</button>
      <button id="reset">reset</button>
    </>
  );
};
export default MediaButtons;
