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
              <button id='btn-signup'>
                Signup
              </button>
            </form>
          </div>
          <Link to='/signup' className='untitled'>
            click here to sign up
          </Link>
        </div>  
      </div>
    </>
  )
}
