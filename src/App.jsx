import { useState } from 'react'
import './App.css'
// Import Outlet component from react-router-dom to swap between different pages according to URL
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  )
}

export default App
