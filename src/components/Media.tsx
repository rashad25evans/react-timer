import React, { useState } from 'react';


const MediaButtons = () => {
  const [intervalId, setIntervalId] = useState<number | null>(null)
  const [seconds, setSeconds] = useState(60);

  const isRunning = intervalId != null
  const startTimer = () => {
    if (isRunning) {
      clearInterval(intervalId)
      setIntervalId(null)
    }
    else {
      const newIntervalId = window.setInterval(() => setSeconds(seconds => seconds - 1), 1000)
      setIntervalId(newIntervalId)
    }
  }


  return (
    <>
      <div id="timer-label">Session</div>
      <div id="timer">{seconds}</div>
      <button onClick={startTimer}>{isRunning ? 'Stop' : 'Start'}</button>
      {/* <div id="time-left">{time.sessionLength}:{'00'}</div> */}
      {/* <button id="start_stop" onClick={() => dispatch({ type: 'START' })}>start</button> */}
      {/* <button id="reset" onClick={() => dispatch({ type: 'RESET', payload: 90 })}>reset</button> */}
    </>
  );
};
export default MediaButtons;
