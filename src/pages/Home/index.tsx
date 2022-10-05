import { useEffect, useState } from 'react'

import { Cycle } from './Home'

import { newCycleFormValidationSchema, NewCycleFormData } from './validator'

import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { differenceInSeconds } from 'date-fns'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  HomeContainer,
  FormContainer,
  FormContent,
  BaseInput,
  MinutesInput,
  FormTimer,
  FormSendButton
} from './styles'

export const Home = () => {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState<number>(0)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema)
  })

  const handleCreateCycle = (data: NewCycleFormData) => {
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

    reset()
  }

  const isSubmitDisabled = !watch('task') || !watch('timeAmount')
  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  useEffect(() => {
    let interval: number
    const intervalMiliseconds = 1000

    if (activeCycle) {
      interval = setInterval(() => setAmountSecondsPassed(
        differenceInSeconds(new Date(), activeCycle.startDate)
      ), intervalMiliseconds)
    }

    return () => clearInterval(interval)
  }, [activeCycle])

  const totalSeconds = activeCycle ? activeCycle.timeAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const timeAmountMinutes = String(Math.floor(currentSeconds / 60)).padStart(2, '0')
  const timeAmountSeconds = String(currentSeconds % 60).padStart(2, '0')

  useEffect(() => {
    if (activeCycle)
      document.title = `${timeAmountMinutes}:${timeAmountSeconds} - ${activeCycle.task}`
  }, [timeAmountMinutes, timeAmountSeconds])

  return (
    <HomeContainer>
      <FormContainer onSubmit={handleSubmit(handleCreateCycle)}>
        <FormContent>
          <label htmlFor="task">I&apos;ll work on</label>
          <BaseInput
            autoFocus
            id="task"
            type="text"
            tabIndex={1}
            list="task-list-suggestions"
            placeholder="Finish my new resume"
            {...register('task')}
          />

          {cycles.length > 0 && (
            <datalist id="task-list-suggestions">
              {cycles[0] && <option value={cycles[0].task} />}
              {cycles[1] && <option value={cycles[1].task} />}
              {cycles[2] && <option value={cycles[2].task} />}
            </datalist>
          )}

          <label htmlFor="timeAmount">for</label>
          <MinutesInput
            min={5}
            max={60}
            tabIndex={2}
            type="number"
            id="timeAmount"
            placeholder="15"
            {...register('timeAmount', { valueAsNumber: true })}
          />

          <span>minutes.</span>
        </FormContent>

        <FormTimer>
          <span className="ft__number">{timeAmountMinutes[0]}</span>
          <span className="ft__number">{timeAmountMinutes[1]}</span>
          <span className="ft__separator">:</span>
          <span className="ft__number">{timeAmountSeconds[0]}</span>
          <span className="ft__number">{timeAmountSeconds[1]}</span>
        </FormTimer>

        <FormSendButton type="submit" title="Start your Timrr" disabled={isSubmitDisabled}>
          <Play size={24} />
          <span>Start</span>
        </FormSendButton>
      </FormContainer>
    </HomeContainer>
  )
}
