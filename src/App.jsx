import React from 'react'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Moto from './pages/moto'
import Polybags from './pages/polybags'
import Elastic from './pages/elastic'
import Drawcord from './pages/drawcord'
function App() {

  return (
    <>
       <BrowserRouter>
          <Routes>
             <Route path='/' element={<Home/>}></Route>
             <Route path='/moto' element={<Moto/>}></Route>
             <Route path='/poly-bag' element={<Polybags/>}></Route>
             <Route path='/elastic' element={<Elastic/>}></Route>
             <Route path='/drawcord' element={<Drawcord/>}></Route>
          </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
