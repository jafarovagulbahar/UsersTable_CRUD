import React from 'react'
import "./styles.sass";
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

export default function App() {
  return (
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  )
}