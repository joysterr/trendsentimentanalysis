import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
  return (
    <>
      <div className='login-container'>
        <div>Login</div>
        <div>
          <Link to='/signup' className='untitled'>
            click here to sign up
          </Link>
        </div>  
      </div>
    </>
  )
}
