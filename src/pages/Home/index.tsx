import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { newCycleFormValidationSchema, NewCycleFormData } from './validator'

import { Play } from 'phosphor-react'

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
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      timeAmount: 0
    }
  })

  const handleCreateCycle = (data: NewCycleFormData) => {
    console.log('data', data)
    reset()
  }

  const isSubmitDisabled = !watch('task') || !watch('timeAmount')

  return (
    <HomeContainer>
      <FormContainer>
        <FormContent onSubmit={handleSubmit(handleCreateCycle)}>
          <label htmlFor="task">I&apos;ll work on</label>
          <BaseInput
            id="task"
            type="text"
            list="task-list-suggestions"
            placeholder="Finish my new resume"
            {...register('task')}
          />

          <datalist id="task-list-suggestions">
            <option value="Option 1" />
            <option value="Option 2" />
            <option value="Option 3" />
          </datalist>

          <label htmlFor="timeAmount">for</label>
          <MinutesInput
            type="number"
            id="timeAmount"
            placeholder="15"
            min={5}
            max={60}
            step={5}
            {...register('timeAmount', { valueAsNumber: true })}
          />

          <span>minutes.</span>
        </FormContent>

        <FormTimer>
          <span className="ft__number">0</span>
          <span className="ft__number">0</span>
          <span className="ft__separator">:</span>
          <span className="ft__number">0</span>
          <span className="ft__number">0</span>
        </FormTimer>

        <FormSendButton type="submit" title="Start your Timrr" disabled={isSubmitDisabled}>
          <Play size={24} />
          <span>Start</span>
        </FormSendButton>
      </FormContainer>
    </HomeContainer>
  )
}
