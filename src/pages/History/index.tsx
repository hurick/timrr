import {
  HistoryContainer,
  TableBody,
  TableContainer,
  TableHeader,
  TableStatus,
  TableWrapper
} from './styles'

export const History = () => {
  return (
    <HistoryContainer>
      <h1 className="hc__title">My History</h1>

      <TableWrapper>
        <TableContainer>
          <TableHeader>
            <tr className="th__row">
              <th className="thr__item">Task</th>
              <th className="thr__item">Duration</th>
              <th className="thr__item">Start</th>
              <th className="thr__item">Status</th>
            </tr>
          </TableHeader>

          <TableBody>
            {[1, 2, 3, 4, 5].map(item => (
              <tr className="tb__row" key={item}>
                <td className="tbr__item">Task name</td>
                <td className="tbr__item">25 minutes</td>
                <td className="tbr__item">2 months ago</td>
                <td className="tbr__item">
                  <TableStatus statusColor='yellow'>In progress</TableStatus>
                </td>
              </tr>
            ))}
          </TableBody>
        </TableContainer>
      </TableWrapper>
    </HistoryContainer>
  )
}
