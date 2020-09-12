import {
  INCREMENT_SESSION,
  DECREMENT_SESSION,
  INCREMENT_BREAK,
  DECREMENT_BREAK,
  START,
  RESET
} from './types';
import { TimeState, TimeAction } from "../interfaces/ReducerInterface"




let timer: any
let timesClicked: number = 0
function countDown() {
  timesClicked++
  if (timesClicked % 2 !== 0) {
    timer = window.setInterval(() => {
      console.log(timesClicked)
    }, 1000)
  } else {
    window.clearInterval(timer)
    timesClicked++
  }
  return 89
}




export const timeReducer = (state: TimeState, action: TimeAction) => {
  switch (action.type) {
    case INCREMENT_SESSION:
      return {
        ...state,
        sessionLength:
          state.sessionLength === 60
            ? state.sessionLength
            : state.sessionLength + 1,
      };
    case DECREMENT_SESSION:
      return {
        ...state,
        sessionLength:
          state.sessionLength === 1
            ? state.sessionLength
            : state.sessionLength - 1,
      };
    case INCREMENT_BREAK:
      return {
        ...state,
        breakLength:
          state.breakLength === 60 ? state.breakLength : state.breakLength + 1,
      };
    case DECREMENT_BREAK:
      return {
        ...state,
        breakLength:
          state.breakLength === 1 ? state.breakLength : state.breakLength - 1,
      };

    case START:
      return {
        ...state,
        breakLength: countDown()
      }

    case RESET:
      return {
        ...state,
        breakLength: action.payload
      }

    default:
      throw new Error('Unexpected action');
  }
};

