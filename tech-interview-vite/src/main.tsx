import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@fontsource-variable/montserrat'

const container = document.getElementById('root')
if (!container) {
  throw new Error('The root container element was not found')
}
createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
)
