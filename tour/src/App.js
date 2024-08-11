import React from 'react'
import About from './pages/About'
import Contact from './pages/Contact'
import Tours from './pages/Tours'
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/tours' element={<Tours/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App