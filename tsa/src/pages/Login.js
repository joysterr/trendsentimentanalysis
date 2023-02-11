import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
      <div>Login</div>
      <div>
        <Link to='/signup' className='untitled'>
          click here to sign up
        </Link>
      </div>  
    </>
  )
}
