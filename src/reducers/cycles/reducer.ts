import { produce } from 'immer'

import { CycleStates } from '../../interfaces/Cycles'
import { ActionTypes } from './actions'

export const cyclesReducer = (state: CycleStates, action: any) => {
  const currentCycleIndex = state.cycles.findIndex(cycle => {
    return cycle.id === state.activeCycleId
  })

  switch(action.type) {
    case ActionTypes.ADD_NEW_CYCLE: {
      return produce(state, draft => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })
    }

    case ActionTypes.STOP_CURRENT_COUNTDOWN: {
      if (currentCycleIndex < 0 ) { return state }

      return produce(state, draft => {
        draft.cycles[currentCycleIndex].stoppedDate = new Date()
        draft.activeCycleId = null
      })
    }

    case ActionTypes.FINISH_CURRENT_CYCLE: {
      if (currentCycleIndex < 0 ) { return state }

      return produce(state, draft => {
        draft.cycles[currentCycleIndex].finishDate = new Date()
        draft.activeCycleId = null
      })
    }

    default: {
      return state
    }
  }
}
