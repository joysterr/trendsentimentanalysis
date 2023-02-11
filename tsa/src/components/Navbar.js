import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='nav'>
    <a href='/' className='logo'>tsa.</a>
    <ul>
            <li>
                <a href='/tsa'>Tsa</a>
            </li>
            <li>
                <a href='/help'>Help</a>
            </li>
            <li>
                <a href='/contact'>Contact</a>
            </li>
            <li>
                <a href='/login'>Login</a>
            </li>
    </ul>
</nav>
  )
}