import { useState, createContext } from 'react'

import { HomeContextData, Cycle } from './Home'

import { Countdown } from './components/Countdown'
import { FormNewCycle } from './components/FormNewCycle'

import { HandPalm, Play } from 'phosphor-react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { newCycleFormValidationSchema, NewCycleFormData } from './validator'

import { HomeContainer, FormContainer, FormSendButton, FormStopButton } from './styles'

export const HomeContext = createContext({} as HomeContextData)

export const Home = () => {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState<number>(0)

  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema)
  })

  const { handleSubmit, watch, reset } = newCycleForm
  const isSubmitDisabled = !watch('task') || !watch('timeAmount')

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
  }

  const handleStopCycle = () => {
    setCycles(state => state.map(cycle => {
      if (cycle.id !== activeCycle?.id) {
        return cycle
      } else {
        return { ...cycle, stoppedDate: new Date() }
      }
    }))

    setActiveCycleId(null)
    reset()
  }

  const setCurrentCycleAsFinished = () => {
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
    <HomeContext.Provider value={{ activeCycle, amountSecondsPassed, setSecondsPassed, setCurrentCycleAsFinished }}>
      <HomeContainer>
        <FormContainer onSubmit={handleSubmit(handleCreateCycle)}>
          <FormProvider {...newCycleForm}>
            <FormNewCycle />
          </FormProvider>

          <Countdown />

          {activeCycleId ? (
            <FormStopButton type="button" title="Stop your Timrr" onClick={handleStopCycle}>
              <HandPalm size={24} />
              <span>Stop</span>
            </FormStopButton>
          ) : (
            <FormSendButton type="submit" title="Start your Timrr" disabled={isSubmitDisabled}>
              <Play size={24} />
              <span>Start</span>
            </FormSendButton>
          )}
        </FormContainer>
      </HomeContainer>
    </HomeContext.Provider>
  )
}
