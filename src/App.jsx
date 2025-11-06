import React from 'react'
import { useState } from 'react'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar'
import AboutSection from './components/About'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar/>
       <AboutSection/>

    </>
  )
}

export default App
