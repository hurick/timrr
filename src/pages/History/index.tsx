import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'

import { formatDistanceToNow } from 'date-fns'

import {
  HistoryContainer,
  TableBody,
  TableContainer,
  TableHeader,
  TableStatus,
  TableWrapper
} from './styles'

export const History = () => {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1 className="hc__title">My History</h1>

      <TableWrapper>
        <TableContainer>
          <TableHeader>
            <tr className="th__row">
              <th className="thr__item">Task</th>
              <th className="thr__item">Duration</th>
              <th className="thr__item">Started</th>
              <th className="thr__item">Status</th>
            </tr>
          </TableHeader>

          <TableBody>
            {cycles.map(cycle => (
              <tr className="tb__row" key={cycle.id}>
                <td className="tbr__item">{cycle.task}</td>
                <td className="tbr__item">{cycle.timeAmount} minutes</td>
                <td className="tbr__item">{formatDistanceToNow(cycle.startDate, { addSuffix: true })}</td>
                <td className="tbr__item">
                  { cycle.finishDate && <TableStatus statusColor='green'>Completed</TableStatus> }
                  { cycle.stoppedDate && <TableStatus statusColor='red'>Stopped</TableStatus> }
                  { !cycle.finishDate && !cycle.stoppedDate && <TableStatus statusColor='yellow'>In Progress</TableStatus> }
                </td>
              </tr>
            ))}
          </TableBody>
        </TableContainer>
      </TableWrapper>
    </HistoryContainer>
  )
}
