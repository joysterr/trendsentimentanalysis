import React, { useState } from 'react'
import axios from 'axios'
import './About.css'

export default function About() {
  const [userName, setUserName] = useState()
  const [showMsg, setShowMsg] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('thanks, we got your (feed)back')
    setUserName(document.getElementById('inputName').value)
    setShowMsg(true)
    var feedbackIn = document.getElementById('inputFeedback').value
    var ratingValIn = document.getElementById('rate').value

    axios.post('/userfeedback',
      {
        feedback: feedbackIn,
        ratingVal: ratingValIn,
      }
    )
      .then(function (response){
        console.log(response)
      })
      .then(function (){
        document.getElementById('feedbackForm').reset()
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <>  
      <div className='about-title'>
        <h1>Who am I? What am I? Why am I?</h1>
      </div>
      <div className='intro-subhead'>
        हेलो! I am tsa. <br/>
        I was developed to understand 'natural language'. <br/>
        I understand emotions from an array of strings, or "sentences".<br/>
        Thank you to my creator, joy, who trained me to understand sentiments<br/>
        behind these oridinary sequences of 1s & 0s. <br/>
        Bye ^_^
      </div>

      <div className='divider-black'>
        <h3>I &lt;3 Feedback</h3>
      </div>

      <div className='feedback-subtitle'>
        <p>(feedback helps me improve!)</p> <br/>
      </div>

      <div className='feedback-form'>
        <form className='feedbackForm' id='feedbackForm'>
          <input
            type='text'
            id='inputName'
            placeholder='Name'
            name='inputEmail'
          />
          <br/>
          <textarea
            type=''
            id='inputFeedback'
            placeholder='Enter feedback here'
            name='inputfeedback'
            className='feedback-input'
            required
          />
          <br/>
          <label>Rate your experience: </label>
          <select name='rate' id='rate' required>
            <option value={1}>Good👍</option>
            <option value={0}>Bad👎</option>
          </select>
          <br/>
          <button id='btn-feedback' type='submit' onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>

      {showMsg ? <div className='user-msg'>Thank you {userName} for your feedback :)</div> : null}

      <div className='feedback-subtitle'>
        <p>(feedback you provide (anonymised) can be used to train the sentiment analysis/sarcasm models)</p> <br/> {/*if automated can cause corpus poisoning*/}
      </div>

      <div className='divider-black'>
        <h3>tsa. performance (based on feedback):</h3>
      </div>
      <div className='tsa-perf'>
        <img src="https://via.placeholder.com/500x500/?text=tsa. performance" alt='placeholder'></img>

      </div>
    </>
  )
}
