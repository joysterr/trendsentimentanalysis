import React from 'react'
import './Tsa.css'

export default function Tsa() {
  return (
    <>
      <div className='container-tsa'>
        <h1>Trend Sentiment Analysis</h1>
        <br/>
        <p>Start by entering your query below</p>
      </div>
      <div className='search-bar'>
        <form id='searchForm' onSubmit={handleSubmit}>
          <input
            type='text'
            id='inputSearch'
            placeholder='Search for Trends'
            name='searchbar'
          />
          <button id='btn-search' type='submit'>
            🔍
          </button>
        </form>
      </div>
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

// function validation() {
//   // to handle search query 
// }


const handleSubmit = (e) => {
  e.preventDefault()
  console.log('button was clicked :)')
  var input = document.getElementById('inputSearch').value
  console.log('user said: ', input)
  document.getElementById('searchForm').reset();
  // axios call 
  // maybe trigger animation?
  // create result as a component so i can load it after search
}