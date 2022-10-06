import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { CyclesContextProvider } from './contexts/CyclesContext'

import { Router } from './routes'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { darkTheme } from './styles/themes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  </StrictMode>
)
