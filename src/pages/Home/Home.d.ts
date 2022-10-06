export interface Cycle {
  id: string
  task: string
  timeAmount: number
  startDate: Date
  stoppedDate?: Date
  finishDate?: Date
}

export interface HomeContextData {
  activeCycle: Cycle | undefined
  amountSecondsPassed: number
  setSecondsPassed: (seconds: number) => void
  setCurrentCycleAsFinished: () => void
}
