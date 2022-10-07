import styled from 'styled-components'

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

  @media screen and (max-width: 860px) {
    flex-wrap: wrap;

    .ft__separator { display: none; }

    .ft__number {
      width: calc(50% - .5rem);
      text-align: center;
    }
  }
`
