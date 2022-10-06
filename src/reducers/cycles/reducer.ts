import { CycleStates } from '../../interfaces/Cycles'
import { ActionTypes } from './actions'

export const cyclesReducer = (state: CycleStates, action: any) => {
  switch(action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return {
        ...state,
        cycles: [action.payload.newCycle, ...state.cycles],
        activeCycleId: action.payload.newCycle.id
      }

    case ActionTypes.STOP_CURRENT_COUNTDOWN:
      return {
        ...state,
        cycles: state.cycles.map(cycle => {
          if (cycle.id !== state.activeCycleId) {
            return cycle
          } else {
            return { ...cycle, stoppedDate: new Date() }
          }
        }),
        activeCycleId: null
      }

    case ActionTypes.FINISH_CURRENT_CYCLE:
      return {
        ...state,
        cycles: state.cycles.map(cycle => {
          if (cycle.id !== state.activeCycleId) {
            return cycle
          } else {
            return { ...cycle, finishDate: new Date() }
          }
        })
      }

    default:
      return state
  }
}
