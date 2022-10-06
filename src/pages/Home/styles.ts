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

const BaseFormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;

  width: 100%;

  border-radius: 8px;
  padding: 1.25rem 1rem;

  color: ${props => props.theme['gray-100']};
  font-weight: 700;

  transition-property: background-color;
  transition-duration: .2s;
  transition-timing-function: ease-in-out;

  &:disabled {
    opacity: .7;
    cursor: not-allowed;
  }
`
export const FormSendButton = styled(BaseFormButton)`
  background-color: ${props => props.theme['green-500']};

  &:not(:disabled):hover {
    background-color: ${props => props.theme['green-700']};
  }
`

export const FormStopButton = styled(BaseFormButton)`
  background-color: ${props => props.theme['red-500']};

  &:not(:disabled):hover {
    background-color: ${props => props.theme['red-700']};
  }
`
