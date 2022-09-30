import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { lightTheme, darkTheme } from './styles/themes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <h1>Timer</h1>

      <GlobalStyles />
    </ThemeProvider>
  </StrictMode>
)
