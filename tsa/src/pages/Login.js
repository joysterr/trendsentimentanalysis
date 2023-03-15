import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
  return (
    <>
      <div className='login-container'>
        <div className='login-title-left'>
          <h1>tsa.</h1>
          <div>login or create an account</div>
        </div>
        <div className='login-box-right'>
          <div className='login-form'>
            <form className='loginForm' id='loginForm'>
              <input
                type='text'
                id='inputEmail'
                placeholder='email address'
                name='inputEmail'
              />
              <input
                type='text'
                id='inputPassword'
                placeholder='password'
                name='inputEmail'
              />
              <button id='btn-login' type='submit'>
                Login
              </button>
            </form>
            <button id='btn-signup' className='sign-button'>
            <Link to='/signup' className='signup-link'>
              Signup
            </Link>
            </button>
          </div>

        </div>  
      </div>
    </>
  )
}
