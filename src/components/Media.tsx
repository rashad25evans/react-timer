import React, { useContext } from 'react';
import { TimeContext } from '../context/TimeContext';

const MediaButtons = () => {
  const { time, dispatch } = useContext(TimeContext);

  // const clockify = ()=> {
  //   let minutes = Math.floor(this.state.timer / 60);
  //   let seconds = this.state.timer - minutes * 60;
  //   seconds = seconds < 10 ? '0' + seconds : seconds;
  //   minutes = minutes < 10 ? '0' + minutes : minutes;
  //   return minutes + ':' + seconds;
  // }


  return (
    <>
      <div id="timer-label">Session</div>
      <div id="time-left">{time.sessionLength}:{'00'}</div>
      <button id="start_stop" onClick={() => dispatch({ type: 'START' })}>start</button>
      <button id="reset" onClick={() => dispatch({ type: 'RESET', payload: 90 })}>reset</button>
    </>
  );
};
export default MediaButtons;
