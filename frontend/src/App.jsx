import React from 'react'
import AppRoutes from './routes/Routes'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="App">
        <AppRoutes />
      </div>
    </BrowserRouter>
    </>
  )
}

export default App