import React from 'react'
import './Home.css'
import senti from '../media/images/senti.jpg'
import sarc from '../media/images/sarc.jpg'
import poem from '../media/images/poem.jpg'
import bot from '../media/images/bot.jpg'

export default function Home() {
  return (
    <div className='home-container'>
      <div className='dot'>.</div>
      <div className='dot'>.</div>
      <div className='dot'>.</div>
      <div className='dot'>.</div>

      <h1>Trend Sentiment Analysis</h1>
      <br/>
      <h2>Analysis beyond numbers.</h2>

      <div className='intro-subhead'>
        हेलो! I am tsa. <br/>
        I was created to understand 'natural language'. <br/>
        I understand emotions from an array of strings, or "sentences".<br/>
        Thank you to my creator, joy, who trained me to understand sentiments<br/>
        behind these oridinary sequences of 1s & 0s. <br/>
        Bye ^_^
      </div>
      <div className='divider-black'>
        <h3>What can I do for you?</h3>
      </div>
      <div className='homepage-img'> 
        <div className='img-title'><b>1.</b>Sentiment Analysis</div>
        <img src={senti} alt='sentiment analysis' /> 
      </div>
      <div className='homepage-img'> 
        <div className='img-title'><b>2.</b>Sarcasm Detection</div>
        <img src={sarc} alt='sarcasm detection' /> 
      </div>
      <div className='divider-black'>
        <h3>Experimental Features (<i>coming soon</i>) :</h3>
      </div>

      <img src={poem} alt='poetry' /> 

      <img src={bot} alt='chatbot' /> 
    </div>
  )
}