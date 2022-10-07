import styled from 'styled-components'

export const LayoutContainer = styled.section`
  display: flex;
  flex-direction: column;

  max-width: 70rem;
  height: calc(100vh - 10rem);

  margin: 5rem auto;
  padding: 2.5rem;

  background-color: ${props => props.theme['gray-800']};
  border-radius: 8px;

  @media screen and (max-width: 80rem) {
    max-width: 100%;

    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }

  @media screen and (max-width: 860px) {
    height: auto;
  }
`
