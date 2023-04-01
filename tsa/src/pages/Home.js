import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className='home-container'>
      <div className='tsa-title-container'>
        <h1>Trend Sentiment Analysis</h1>
        <br />
        <h2>Analysis beyond numbers.</h2>
      </div>
      <div className='divider-black'>
        <h3>What can I do for you?</h3>
      </div>
      <div className='features-set'>
        <div className='homepage-img'>
          <div className='img-title'>
            <Link to='/info' className='feature-link'>
              Sentiment Analysis
            </Link>
          </div>
        </div>
        <div className='homepage-img'>
          <div className='img-title'>
            <Link to='/info' className='feature-link'>
              Sarcasm Detection
            </Link>
          </div>
        </div>
      </div>
      <div className='divider-black'>
        <h3>Experimental Features (<i>coming soon</i>) :</h3>
      </div>
      <div className='features-set'>
        <div className='homepage-img'>
          <div className='img-title'> Poem <br />Generator</div>
        </div>
        <div className='homepage-img'>
          <div className='img-title'> Chatbot</div>
        </div>
      </div>
    </div>
  )
}