import { createContext, useState } from 'react'
import {
  Cycle,
  CyclesContextData,
  CyclesContextProviderProps,
  NewCycleFormData
} from '../interfaces/Cycles'

export const CyclesContext = createContext({} as CyclesContextData)

export const CyclesContextProvider = ({ children }: CyclesContextProviderProps) => {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState<number>(0)

  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  const createNewCycle = (data: NewCycleFormData) => {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      timeAmount: data.timeAmount,
      startDate: new Date()
    }

    setCycles(state => [newCycle, ...state])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)
  }

  const stopCurrentCycle = () => {
    setCycles(state => state.map(cycle => {
      if (cycle.id !== activeCycle?.id) {
        return cycle
      } else {
        return { ...cycle, stoppedDate: new Date() }
      }
    }))

    setActiveCycleId(null)
    // reset()
  }

  const setCycleFinished = () => {
    setCycles(state => state.map(cycle => {
      if (cycle.id !== activeCycle?.id) {
        return cycle
      } else {
        return { ...cycle, finishDate: new Date() }
      }
    }))
  }

  const setSecondsPassed = (seconds: number) => {
    setAmountSecondsPassed(seconds)
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        createNewCycle,
        stopCurrentCycle,
        setSecondsPassed,
        setCycleFinished
      }}>
      { children }
    </CyclesContext.Provider>
  )
}
