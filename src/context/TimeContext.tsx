import React, { createContext, useReducer } from 'react'
import { timeReducer } from './TimeReducer'
import { TimeInterface, LayoutProps } from '../interfaces/ContextInterface'

const initialTime: TimeInterface = {
  breakLength: 5,
  sessionLength: 25,
}


const TimeContext = createContext<{ time: TimeInterface, dispatch: React.Dispatch<any> }>({
  time: initialTime,
  dispatch: () => null,
});




const AppProvider = (props: LayoutProps) => {

  const [time, dispatch] = useReducer(timeReducer, initialTime)

  return (
    <TimeContext.Provider value={{ time, dispatch }}>
      {props.children}
    </TimeContext.Provider>
  )
}

export { AppProvider, TimeContext };