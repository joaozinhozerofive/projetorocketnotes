import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './styles/theme.js'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import { Routes } from './Routes/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
<ThemeProvider theme={theme}>
  <GlobalStyles/>
    <Routes />
  </ThemeProvider>
  </React.StrictMode>,
)