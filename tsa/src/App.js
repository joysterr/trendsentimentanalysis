import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Tsa from './pages/Tsa'
import Help from './pages/Help'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/tsa' element={ <Tsa /> } />
          <Route path='/help' element={ <Help /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/signup' element={ <Signup /> } />
        </Routes>
      </div>
    </>
  )
}

export default App;
