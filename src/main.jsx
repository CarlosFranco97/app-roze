import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router'
import './index.css'
import DriverRegisterPage from './features/register/DriverRegisterPage'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={
      router 
    } />

    
  </StrictMode>,
)
