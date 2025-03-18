import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoze from '../AppRoze'
import Login from './pages/Login'
import Registro from './pages/Registro'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppRoze /> */}
    {/* <Login /> */}
    <Registro/>
  </StrictMode>,
)
