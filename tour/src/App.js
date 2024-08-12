import React from 'react'
import About from './pages/About'
import Contact from './pages/Contact'
import Tours from './pages/Tours'
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import PromoBanner from './components/PromoBanner'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/tours' element={<Tours/>}/>
      </Routes>
      </BrowserRouter>
      <PromoBanner />
      <Footer />
    </div>
  )
}

export default App