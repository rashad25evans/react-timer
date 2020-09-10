import {
  INCREMENT_SESSION,
  DECREMENT_SESSION,
  INCREMENT_BREAK,
  DECREMENT_BREAK,
} from './types';

interface TimeState {
  breakLength: number;
  sessionMinutes: number;
  sessionSeconds: string;
}

interface TimeAction {
  type: string;
}

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
    default:
      return state;
  }
};
