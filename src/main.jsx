import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './routes/Router'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import HamburguerMenu from './components/layouts/header/HamburguerMenu'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={
      router 
    } />
    {/* <HamburguerMenu /> */}
  </StrictMode>,
)
