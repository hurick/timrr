import styled from 'styled-components'

export const LayoutContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  max-width: 70rem;
  padding: 2.5rem;
  margin: 5rem 0;

  background-color: ${props => props.theme['gray-800']};
  border-radius: 8px;

  @media screen and (max-width: 1120px) {
    margin: 1rem auto;
    width: calc(100% - 2rem);
  }
`
