import { Cycle } from '../../interfaces/Cycles'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  STOP_CURRENT_COUNTDOWN = 'STOP_CURRENT_COUNTDOWN',
  FINISH_CURRENT_CYCLE = 'FINISH_CURRENT_CYCLE'
}

export const createNewCycleAction = (newCycle: Cycle) => ({
  type: ActionTypes.ADD_NEW_CYCLE,
  payload: { newCycle }
})

export const stopCurrentCycleAction = () => ({
  type: ActionTypes.STOP_CURRENT_COUNTDOWN
})

export const finishCurrentCycleAction = () => ({
  type: ActionTypes.FINISH_CURRENT_CYCLE
})
