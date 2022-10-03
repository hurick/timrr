import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  max-width: 700px;
  width: 100%;

  margin: auto;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 3.75rem;
`

export const FormContent = styled.fieldset`
  display: flex;
  align-items: flex-start;
  gap: .75rem;

  width: 100%;

  font-size: 1.125rem;
  font-weight: 700;
  color: ${props => props.theme['gray-100']};
`

export const BaseInput = styled.input`
  display: flex;
  flex: 1;

  padding: .15rem .75rem .5rem;
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid ${props => props.theme['gray-500']};

  color: ${props => props.theme['gray-100']};
  text-align: center;

  transition-property: border-color;
  transition-duration: .2s;
  transition-timing-function: ease-in-out;

  &::placeholder {
    color: ${props => props.theme['gray-500']};
  }

  &:focus {
    border-color: ${props => props.theme['green-500']};
  }
`

export const MinutesInput = styled(BaseInput)`
  flex-grow: initial;
  width: 3rem;
`

export const FormTimer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 1em;
  font-weight: 700;

  .ft__number {
    padding: 2.5rem 1rem;
    background-color: ${props => props.theme['gray-700']};
    border-radius: 8px;

    color: ${props => props.theme['gray-100']};
  }

  .ft__separator {
    color: ${props => props.theme['green-500']};
  }
`

export const FormSendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;

  width: 100%;

  background-color: ${props => props.theme['green-500']};
  border-radius: 8px;
  padding: 1.25rem 1rem;

  color: ${props => props.theme['gray-100']};
  font-weight: 700;

  transition-property: background-color;
  transition-duration: .2s;
  transition-timing-function: ease-in-out;

  &:not(:disabled):hover {
    background-color: ${props => props.theme['green-700']};
  }

  &:disabled {
    opacity: .7;
    cursor: not-allowed;
  }
`
