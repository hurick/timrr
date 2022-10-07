import { differenceInSeconds } from 'date-fns'
import { createContext, useEffect, useReducer, useState } from 'react'
import {
  Cycle,
  CyclesContextData,
  CyclesContextProviderProps,
  CycleStates,
  NewCycleFormData
} from '../interfaces/Cycles'

import { createNewCycleAction, finishCurrentCycleAction, stopCurrentCycleAction } from '../reducers/cycles/actions'

import { cyclesReducer } from '../reducers/cycles/reducer'

export const CyclesContext = createContext({} as CyclesContextData)

export const CyclesContextProvider = ({ children }: CyclesContextProviderProps) => {
  const [cycleStates, dispatch] = useReducer(cyclesReducer, {
    cycles: [],
    activeCycleId: null
  }, () => {
    const storedStateAsJSON = localStorage.getItem('@timrr:cycles-1.0.0')

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }

    return {
      cycles: [],
      activeCycleId: null
    }
  })

  const { cycles, activeCycleId }: CycleStates = cycleStates
  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState<number>(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })

  useEffect(() => {
    const cycleStatesJSON = JSON.stringify(cycleStates)

    localStorage.setItem('@timrr:cycles-1.0.0', cycleStatesJSON)
  }, [cycleStates])

  const createNewCycle = (data: NewCycleFormData) => {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      timeAmount: data.timeAmount,
      startDate: new Date()
    }

    dispatch(createNewCycleAction(newCycle))
    setAmountSecondsPassed(0)
  }

  const stopCurrentCycle = () => {
    dispatch(stopCurrentCycleAction())
    document.title = 'Timrr'
  }

  const finishCurrentCycle = () => {
    dispatch(finishCurrentCycleAction())
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
        finishCurrentCycle
      }}>
      { children }
    </CyclesContext.Provider>
  )
}
