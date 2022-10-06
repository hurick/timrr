export interface Cycle {
  id: string
  task: string
  timeAmount: number
  startDate: Date
  stoppedDate?: Date
  finishDate?: Date
}

export interface CyclesContextData {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: NewCycleFormData) => void
  stopCurrentCycle: () => void
  finishCurrentCycle: () => void
}

export interface CyclesContextProviderProps {
  children: ReactNode
}

export interface CycleStates {
  cycles: Cycle[]
  activeCycleId: string | null
}

export interface NewCycleFormData {
  task: string
  timeAmount: number
}
