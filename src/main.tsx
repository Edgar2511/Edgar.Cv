import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LangProvider } from './data/LangContext'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </StrictMode>,
)
