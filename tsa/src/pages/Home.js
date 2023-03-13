import React from 'react'
import './Home.css'
import senti from '../media/images/senti.jpg'
import sarc from '../media/images/sarc.jpg'
import poem from '../media/images/poem.jpg'
import bot from '../media/images/bot.jpg'

export default function Home() {
  return (
    <div className='home-container'>
      <div className='tsa-title-container'>
        <h1>Trend Sentiment Analysis</h1>
        <br/>
        <h2>Analysis beyond numbers.</h2>
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