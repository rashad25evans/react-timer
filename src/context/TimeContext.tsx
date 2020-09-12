import React, { createContext, useReducer } from 'react'
import { timeReducer } from './TimeReducer'



interface TimeInterface {
  breakLength: number,
  sessionMinutes: number,
  sessionSeconds: string
}

interface LayoutProps {
  children: React.ReactNode
}

const initialTime = {
  breakLength: 5,
  sessionMinutes: 25,
  sessionSeconds: '00'
}

const TimeContext = createContext<{ time: TimeInterface, dispatch: React.Dispatch<any> }>({
  time: initialTime,
  dispatch: () => null
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