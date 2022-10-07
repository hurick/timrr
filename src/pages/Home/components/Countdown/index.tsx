import { useContext, useEffect } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContext'

import { differenceInSeconds } from 'date-fns'

import { FormTimer } from './styles'

export const Countdown = () => {
  const {
    activeCycle,
    amountSecondsPassed,
    setSecondsPassed,
    finishCurrentCycle
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.timeAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const timeAmountMinutes = String(Math.floor(currentSeconds / 60)).padStart(2, '0')
  const timeAmountSeconds = String(currentSeconds % 60).padStart(2, '0')

  useEffect(() => {
    let interval: number
    const intervalMiliseconds = 1000

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifferential = differenceInSeconds(new Date(), new Date(activeCycle.startDate))

        if (secondsDifferential < totalSeconds) {
          setSecondsPassed(secondsDifferential)
        } else {
          clearInterval(interval)
          finishCurrentCycle()
          setSecondsPassed(totalSeconds)
        }
      }, intervalMiliseconds)
    }

    return () => clearInterval(interval)
  }, [activeCycle, totalSeconds, setSecondsPassed])

  useEffect(() => {
    if (activeCycle)
      document.title = `${timeAmountMinutes}:${timeAmountSeconds} - ${activeCycle.task}`
  }, [timeAmountMinutes, timeAmountSeconds])

  return (
    <FormTimer>
      <span className="ft__number">{timeAmountMinutes[0]}</span>
      <span className="ft__number">{timeAmountMinutes[1]}</span>
      <span className="ft__separator">:</span>
      <span className="ft__number">{timeAmountSeconds[0]}</span>
      <span className="ft__number">{timeAmountSeconds[1]}</span>
    </FormTimer>
  )
}
