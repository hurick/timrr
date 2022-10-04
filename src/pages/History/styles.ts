import styled from 'styled-components'

export const HistoryContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;

  .hc__title {
    margin-bottom: 2rem;

    font-size: 1.5rem;
    font-weight: 700;
    color: ${props => props.theme['gray-100']};
  }
`

export const TableWrapper = styled.section`
  flex: 1;
  overflow: auto;
`

export const TableContainer = styled.table`
  width: 100%;
  min-width: 768px;
  border-collapse: collapse;

  font-size: .875rem;
`

export const TableHeader = styled.thead`
  background-color: ${props => props.theme['gray-600']};

  color: ${props => props.theme['gray-100']};
  text-align: left;

  .thr__item {
    padding: 1rem;

    &:first-child {
      border-top-left-radius: 8px;
      padding-left: 1.5rem;
    }

    &:last-child {
      border-top-right-radius: 8px;
      padding-right: 1.5rem;
    }
  }
`

export const TableBody = styled.tbody`
  background-color: ${props => props.theme['gray-700']};

  .tbr__item {
    padding: 1rem;
    border-top: 4px solid ${props => props.theme['gray-800']};

    &:first-child {
      width: 50%;
      padding-left: 1.5rem;
    }
    &:last-child { padding-right: 1.5rem; }
  }
`

const STATUS_COLOR = {
  red: 'red-500',
  yellow: 'yellow-500',
  green: 'green-500'
} as const

interface TableStatusProps {
  statusColor: keyof typeof STATUS_COLOR
}

export const TableStatus = styled.span<TableStatusProps>`
  display: flex;
  align-items: center;
  gap: .5rem;

  &:before {
    width: .5rem;
    height: .5rem;

    background-color: ${props => props.theme[STATUS_COLOR[props.statusColor]]};
    border-radius: 50%;

    content: '';
  }
`
