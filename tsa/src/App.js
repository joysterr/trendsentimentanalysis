import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Tsa from './pages/Tsa'
import Help from './pages/Help'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Xperiments from './pages/Xperiments';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/tsa' element={ <Tsa /> } />
          <Route path='/xperiments' element={ <Xperiments /> } />
          <Route path='/help' element={ <Help /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/about' element={ <About />} />
          <Route path='/login' element={ <Login /> } />
          <Route path='/signup' element={ <Signup /> } />
        </Routes>
      </div>
        <Footer />
    </>
  )
}

export default App;
