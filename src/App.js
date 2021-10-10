import React from 'react'
import "./styles.sass";
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import Footer from './containers/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Routes/>
      <Footer/>
    </BrowserRouter>
  )
}