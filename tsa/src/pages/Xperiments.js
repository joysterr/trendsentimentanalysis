import React, { useState } from 'react'
import axios from 'axios'
import Poetry from '../components/Poetry'
import './Xperiments.css'

export default function Xperiments() {
  const [result, setResult] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('wanna read poetry huh? \n give me a <br/>')
    document.getElementById('inputPoemStart').value = '' //reset
  }

  const handleTestSubmit = (e) => {
    e.preventDefault()
    console.log('your test is being tested...')
    axios.post('/tsatests',
      document.getElementById('inputSentence').value
    )
      .then(response => {
        setResult(response.data)
        console.log('test result=', response.data)
      })
      .catch(error => {
        console.log(error)
      })
    document.getElementById('inputSentence').value = '' //reset
  }

  return (
    <>
      <div className='container-xp'>
        <h1>Welcome to Xperiments</h1>
        <div>(please have your safety goggles ready 😎)</div>
      </div>

      <div className='divider-black'>
        <h3>tsa's Sentiment Analysis Model</h3>
      </div>

      <div className='search-bar'>
        <div className='search-heading'>Let's test tsa's sentiment analysis model</div>
        <div className='search-heading'><p>Type in a sentence and submit it, tsa will predict the sentiment to its best ability</p></div>
        <form id='testTsaForm' onSubmit={handleTestSubmit}>
          <input
            type='text'
            id='inputSentence'
            placeholder='Type your sentence here'
            name='testsearchbar'
          />
          <button id='btn-send-test' type='submit'>
            🔬
          </button>
        </form>
      </div>
      <div className='display-result'>
        Result: {result}
      </div>

      <div className='divider-black'>
        <h3>Poetry Generator (unready)</h3>
      </div>

      <div className='search-bar'>
        <div className='search-heading'>Start typing first line of your poetry</div>
        <form id='searchForm' onSubmit={handleSubmit}>
          <input
            type='text'
            id='inputPoemStart'
            placeholder='Type a few words here'
            name='searchbar'
          />
          <button id='btn-search' type='submit'>
            📝
          </button>
        </form>
      </div>
      <div className='poetry-output'>
        <Poetry />
      </div>
    </>
  )
}
