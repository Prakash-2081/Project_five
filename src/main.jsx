import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './router/About.jsx'
import Features from './router/Features.jsx'
import Home from './router/Home.jsx'

const router=createBrowserRouter([
  {path: '/',
  element: <App />,
  children: [
    {path: '/',element: <Home/> },
    {path: '/about',element: <About/>},
    {path: '/features',element: <Features />}
  ]
  }
    ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
