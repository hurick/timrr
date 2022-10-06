import { useContext } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContext'

import { useFormContext } from 'react-hook-form'

import { FormContent, BaseInput, MinutesInput } from './styles'

export const FormNewCycle = () => {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContent activeCycle={!!activeCycle}>
      <label htmlFor="task">I&apos;ll work on</label>
      <BaseInput
        id="task"
        type="text"
        tabIndex={1}
        disabled={!!activeCycle}
        placeholder="Finish my new resume"
        {...register('task')}
      />

      <label htmlFor="timeAmount">for</label>
      <MinutesInput
        min={5}
        max={60}
        tabIndex={2}
        type="number"
        id="timeAmount"
        placeholder="15"
        disabled={!!activeCycle}
        {...register('timeAmount', { valueAsNumber: true })}
      />

      <span>minutes.</span>
    </FormContent>
  )
}
