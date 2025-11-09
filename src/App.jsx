import React from 'react'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Moto from './pages/moto'
import Polybags from './pages/polybags'
function App() {

  return (
    <>
       <BrowserRouter>
          <Routes>
             <Route path='/' element={<Home/>}></Route>
             <Route path='/moto' element={<Moto/>}></Route>
             <Route path='/poly-bag' element={<Polybags/>}></Route>
          </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
