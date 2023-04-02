import React from 'react'
import axios from "axios";
import './Contact.css'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/supportreqs',
      {
        emailId: (document.getElementById('inputEmail').value),
        queryIn: (document.getElementById('inputQuery').value)
      }
    )
      .then(function (response) {
        console.log(response)
      })
      .then(function () {
        document.getElementById('contactForm').reset()
      })
      .catch(function (error) {
        console.log(error)
      })
    console.log('okay, we got your cry for help')
  }

  return (
    <>
      <div className='contact-container'>
        <div className='contact-box'>
          <div className='login-form'>
            <form className='contactForm' id='contactForm'>
              <input
                type='email'
                id='inputEmail'
                placeholder='email address'
                name='inputEmail'
              />
              <br />
              <textarea
                type=''
                id='inputQuery'
                placeholder='Type your query'
                name='inputquery'
                className='query-input'
              />
              <br />
              <button id='btn-login' type='submit' onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
