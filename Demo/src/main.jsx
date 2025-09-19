import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'react-quick-notify/dist/toast.css'
// import '../react-quick-notify/dist/toast.css'  // Uncomment for local development
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
