import React, { createContext, useReducer } from 'react'
import { timeReducer } from './TimeReducer'


interface InitialStateInterface {
  breakLength: number,
  sessionMinutes: number,
  sessionSeconds: string
}


const initialState = {
  breakLength: 5,
  sessionMinutes: 25,
  sessionSeconds: '00'
}

const TimeContext = createContext<{ state: InitialStateInterface, dispatch: React.Dispatch<any> }>({
  state: initialState,
  dispatch: () => null
});


const AppProvider = (props: any) => {

  const [state, dispatch] = useReducer(timeReducer, initialState)

  return (
    <TimeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TimeContext.Provider>
  )
}

export { AppProvider, TimeContext };