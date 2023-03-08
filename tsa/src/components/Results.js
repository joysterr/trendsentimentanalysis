import React from 'react'
import './Results.css'

export default function Results() {
  return (
    <>
        <div className='results-region'>
        <p>Results are dispalyed below:</p>
        <br/>
        <div className='graphs'>
          <img src="https://via.placeholder.com/500x500/?text=barchart" alt='placeholder'></img>
          <img src="https://via.placeholder.com/500x500/?text=piechart" alt='placeholder'></img>
          <img src="https://via.placeholder.com/500x500/?text=sarcasm%" alt='placeholder'></img>
          <img src="https://via.placeholder.com/500x500/?text=wordmap" alt='placeholder'></img>
        </div>
      </div>
    </>
  )
}
