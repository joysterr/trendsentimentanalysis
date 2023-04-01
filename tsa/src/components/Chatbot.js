import React from 'react'
import { Link } from 'react-router-dom'
import './Chatbot.css'

export default function Chatbot() {
  function loadHelp() {

  }
  return (
    <>
      <Link to='/info' className='info-link'>
        <button className='chatbot-btn' onClick={loadHelp()}></button>
      </Link>
    </>
  )
}
