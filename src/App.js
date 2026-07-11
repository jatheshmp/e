import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './componrnts/Header'
import { Container } from 'react-bootstrap'
import Home from './componrnts/Home'
import Footer from './componrnts/Footer'
import Signup from './screen/Signup'
// 1. ADDED MISSING IMPORT FOR LOGINSCREEN (adjust the path if your file name/folder is different)
import LoginScreen from './screen/LoginScreen' 

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Container>
            {/* 2. GROUPED ALL ROUTES INSIDE A SINGLE <Routes> CONTAINER */}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<LoginScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
