import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

// 1. Only import each thing ONCE
import Header from './componrnts/Header'
import Footer from './componrnts/Footer'
import Home from './componrnts/Home'
import Signup from './screen/Signup'
import LoginScreen from './screen/LoginScreen'
import ProductDetails from './screen/ProductDetails' 
import SignupScreen from './screen/SignupScreen'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* Added the :id parameter so product pages work */}
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/signup' element={<SignupScreen />} />
            <Route path='/login' element={<LoginScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App