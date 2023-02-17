import React from 'react'
import { Link } from 'react-router-dom'

export default function Help() {
  return (
    <>
      <h1>Help</h1>
      <div>Need more help?</div>
      <Link to='/contact' className='untitled'>
        click here to access form
      </Link>
    </>
  )
}
