import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppHome } from './AppHome'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Docs } from './Docs'
import './index.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<AppHome />} />
        <Route path='/docs/*' element={<Docs />} />
        <Route path='/*' element={<Navigate to={'/'} />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
