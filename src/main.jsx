import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoze from '../AppRoze'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppRoze /> */}
    {/* <Login /> */}
    <Register />
  </StrictMode>,
)
