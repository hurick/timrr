import styled from 'styled-components'

interface FormContentProps {
  activeCycle: boolean
}

export const FormContent = styled.fieldset<FormContentProps>`
  display: flex;
  align-items: flex-start;
  gap: .75rem;

  width: 100%;

  font-size: 1.125rem;
  font-weight: 700;
  color: ${props => props.theme['gray-100']};

  opacity: ${props => props.activeCycle ? .4 : 1};

  @media screen and (max-width: 768px) { flex-wrap: wrap; }
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
