import {
  INCREMENT_SESSION,
  DECREMENT_SESSION,
  INCREMENT_BREAK,
  DECREMENT_BREAK,
  START,
  // RESET
} from './types';

interface TimeState {
  breakLength: number;
  sessionMinutes: number;
  sessionSeconds: string;
}

interface TimeAction {
  type: string;
}

// const setTimer = (): any => {
//   let myVar
//   let timesClicked = 0
//   timesClicked++
//   if (timesClicked % 2 !== 0) {
//     myVar = setInterval(() => {
//       console.log('ffffffffff')
//     }, 1000);
//   } else {
//     clearInterval(myVar)
//   }
// }
// function init() {
//   return 78
// }

export const timeReducer = (state: TimeState, action: TimeAction) => {
  switch (action.type) {
    case INCREMENT_SESSION:
      return {
        breakLength: state.breakLength,
        sessionMinutes:
          state.sessionMinutes === 60
            ? state.sessionMinutes
            : state.sessionMinutes + 1,
        sessionSeconds: state.sessionSeconds,
      };
    case DECREMENT_SESSION:
      return {
        breakLength: state.breakLength,
        sessionMinutes:
          state.sessionMinutes === 1
            ? state.sessionMinutes
            : state.sessionMinutes - 1,
        sessionSeconds: state.sessionSeconds,
      };
    case INCREMENT_BREAK:
      return {
        breakLength:
          state.breakLength === 60 ? state.breakLength : state.breakLength + 1,
        sessionMinutes: state.sessionMinutes,
        sessionSeconds: state.sessionSeconds,
      };
    case DECREMENT_BREAK:
      return {
        breakLength:
          state.breakLength === 1 ? state.breakLength : state.breakLength - 1,
        sessionMinutes: state.sessionMinutes,
        sessionSeconds: state.sessionSeconds,
      };

    case START:
      return {
        sessionMinutes: 0,
        sessionSeconds: '00',
        breakLength: 6
      }

    // case RESET:
    //   return 

    default:
      throw new Error();
  }
};


