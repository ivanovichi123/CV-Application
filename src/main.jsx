import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TheForm from './the-form'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <header>
      <h1 id='header-header'>CV summarizer</h1>
      <p id='header-text'>This page will guide you through all the info you need to put to make your own CV and it will show you a final result with your own information.</p>
    </header>
    <TheForm />
  </StrictMode>,
)
