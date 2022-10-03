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
  return (
    <HomeContainer>
      <FormContainer>
        <FormContent>
          <label htmlFor="task">I&apos;ll work on</label>
          <BaseInput type="text" list="task-list-suggestions" id="task" placeholder="Finish my new resume" />

          <datalist id="task-list-suggestions">
            <option value="Option 1" />
            <option value="Option 2" />
            <option value="Option 3" />
          </datalist>

          <label htmlFor="timeAmount">for</label>
          <MinutesInput type="number" id="timeAmount" placeholder="15" min={5} max={60} step={5} />

          <span>minutes.</span>
        </FormContent>

        <FormTimer>
          <span className="ft__number">0</span>
          <span className="ft__number">0</span>
          <span className="ft__separator">:</span>
          <span className="ft__number">0</span>
          <span className="ft__number">0</span>
        </FormTimer>

        <FormSendButton type="submit" title="Start your Timrr">
          <Play size={24} />
          <span>Start</span>
        </FormSendButton>
      </FormContainer>
    </HomeContainer>
  )
}
