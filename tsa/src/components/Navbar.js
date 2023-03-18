import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className='nav'>
            <Link to='/' className='logo'>tsa.</Link>
            <ul>
                <CreateLink to='/tsa'>Tsa</CreateLink>
                <CreateLink to='/xperiments'>Tsa-X</CreateLink>
                <CreateLink to='/help'>Help</CreateLink>
                <CreateLink to='/about'>About</CreateLink>
                <CreateLink to='/login'>Login</CreateLink>
            </ul>
        </nav>
    )
}

function CreateLink({ to, children, ...props }) {
    const path = window.location.pathname

    return (
        <li className={path}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}