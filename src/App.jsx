import React from 'react'
import { useState } from 'react'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar'
import AboutSection from './components/About'
import Buyers from './components/buyers'
import CertificateCards from './components/certificate'
import Products from './components/Products'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar/>
       <AboutSection/>
       <Buyers/>
       <CertificateCards/>
       <Products/>
    </>
  )
}

export default App
