import {
  INCREMENT_SESSION,
  DECREMENT_SESSION,
  INCREMENT_BREAK,
  DECREMENT_BREAK,
  START,
  RESET,
} from './types';
import { LengthState, LengthAction } from '../interfaces/ReducerInterface';

export const lengthReducer = (state: LengthState, action: LengthAction) => {
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
        sessionLength:
          state.sessionSeconds === 59
            ? state.sessionLength--
            : state.sessionLength,
        sessionSeconds:
          state.sessionSeconds === 0 ? 59 : state.sessionSeconds--,
      };
    case RESET:
      return {
        breakLength: 5,
        sessionLength: 25,
        sessionSeconds: 0,
      };

    default:
      throw new Error('Unexpected action');
  }
};
