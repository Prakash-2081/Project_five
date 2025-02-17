import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import AllContext from './store/AllContext'

const App = () => {
  return (
    <>
    <AllContext>
    <Header />
    <Outlet />
    <Footer />
    </AllContext>
    </>
  )
}

export default App