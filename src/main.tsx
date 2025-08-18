import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router'
import App from './App.tsx'
import Alexa from './Alexa.tsx'
import Google from './Google.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/alexa" element={<Alexa />} />
        <Route path="/google" element={<Google />} />
      </Routes>
    </HashRouter>
  </StrictMode>
)
