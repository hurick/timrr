import { Play } from 'phosphor-react'

import { HomeContainer, FormContainer, FormContent, FormTimer, FormSendButton } from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <FormContainer>
        <FormContent>
          <label htmlFor="task">I&apos;ll work on</label>
          <input type="text" id="task" placeholder="Give a name for you task" className="fc__input task" />

          <label htmlFor="timeAmount">for</label>
          <input type="text" id="timeAmount" maxLength={3} placeholder="00" className="fc__input minutes" />

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
