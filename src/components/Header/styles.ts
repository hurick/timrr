import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 4.5rem;
`

export const HeaderNav = styled.div`
  display: flex;
  gap: 1rem;

  .hn__anchor {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 3rem;
    height: 3rem;

    color: ${props => props.theme['gray-100']};
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    transition-property: border-color, color;
    transition-duration: .2s;
    transition-timing-function: ease-in-out;

    &:hover {
      border-bottom-color: ${props => props.theme['green-500']};
    }

    &.active {
      color: ${props => props.theme['green-500']};
    }
  }
`
