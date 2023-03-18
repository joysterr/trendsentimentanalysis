import React from 'react'
import Contact from './Contact'
import './Help.css'

export default function Help() {
  return (
    <>
      <div className='about-container'>
        <h1>Need help?</h1> <br />
      </div>

      <div className='divider-black'>
        <h3>Contact + Support</h3>
      </div>

      <div className='contact-container'>
        <Contact />
      </div>
      <div className='message-end'>
        <p>(we aim to get back to you within 24hours)</p> <br />
      </div>
    </>
  )
}
