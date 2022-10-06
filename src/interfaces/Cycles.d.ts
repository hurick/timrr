export interface Cycle {
  id: string
  task: string
  timeAmount: number
  startDate: Date
  stoppedDate?: Date
  finishDate?: Date
}

export interface NewCycleFormData {
  task: string
  timeAmount: number
}

export interface CyclesContextData {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  createNewCycle: (data: NewCycleFormData) => void
  stopCurrentCycle: () => void
  setSecondsPassed: (seconds: number) => void
  setCycleFinished: () => void
}

export interface CyclesContextProviderProps {
  children: ReactNode
}
