import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ToolBar from './Components/ToolBar.jsx'
import Canvas from './Components/Canvas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Canvas/>
  </StrictMode>,
)
