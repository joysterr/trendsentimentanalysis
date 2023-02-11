import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <div className='home-container'>
      <div className='dot'>.</div>
      <div className='dot'>.</div>
      <div className='dot'>.</div>
      <div className='dot'>.</div>

      <h1>Analysis beyond numbers.</h1>
      <div className='dot'>.</div>
      <h2>Trend Sentiment Analysis</h2>

      <div className='dot'>.</div>
      <div className='dot'>.</div>
      <div className='dot'>.</div>
      <div className='dot'>.</div>

      <div className='intro-subhead'>
        Hola! I am tsa. <br/>
        I was created to understand 'natural language'. <br/>
        I understand emotions from an array of strings, or "sentences".<br/>
        Thank you to my creator, joy, who trained me to understand sentiments.<br/>
        behind these oridinary sequences of 1s & 0s. <br/>
        Bye ^_^
      </div>
      <div className='divider-black'>
        <h3>What can I do for you?</h3>
      </div>

      <img src="https://via.placeholder.com/910x500/?text=Hello" alt='placeholder'></img>
    </div>
  )
}
