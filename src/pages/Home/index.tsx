import { useContext } from 'react'

import { CyclesContext } from '../../contexts/CyclesContext'

import { Countdown } from './components/Countdown'
import { FormNewCycle } from './components/FormNewCycle'

import { HandPalm, Play } from 'phosphor-react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { newCycleFormValidationSchema, NewCycleFormData } from './validator'

import { HomeContainer, FormContainer, FormSendButton, FormStopButton } from './styles'

export const Home = () => {
  const { activeCycleId, createNewCycle, stopCurrentCycle } = useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema)
  })

  const { handleSubmit, watch, reset } = newCycleForm
  const isSubmitDisabled = !watch('task') || !watch('timeAmount')

  const handleStopCurrentCycle = () => {
    stopCurrentCycle()
    reset()
  }

  return (
    <HomeContainer>
      <FormContainer onSubmit={handleSubmit(createNewCycle)}>
        <FormProvider {...newCycleForm}>
          <FormNewCycle />
        </FormProvider>

        <Countdown />

        {activeCycleId ? (
          <FormStopButton type="button" title="Stop your Timrr" onClick={handleStopCurrentCycle}>
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
  )
}
