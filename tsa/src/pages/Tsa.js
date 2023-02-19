import React from 'react'
import axios from 'axios'
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

      {/* reports need to be customisd */}
      <div className='customise-menu'>
        <p>Customise your report:</p>
        <div className='menu-btns'>
          <label><input type='checkbox' id='bar' value='0' className='custom-check'></input> barchart</label>
          <label><input type='checkbox' id='pie' value='0' className='custom-check'></input> piechart</label>
          <label><input type='checkbox' id='sarc' value='0' className='custom-check'></input> sarcasm detect</label>
          <label><input type='checkbox' id='wordm' value='0' className='custom-check'></input> wordmap</label>
          
          <button id='btn-save' onClick={customiseReport}>Save</button>
        </div>
      </div>

      <div className='results-region'>
        <p>Results are displayed below:</p>
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


function customiseReport() {
  console.log('customise button clicked!')
  var selection = [document.getElementById('bar').checked, 
    document.getElementById('pie').checked,
    document.getElementById('sarc').checked,
    document.getElementById('wordm').checked
  ]
  console.log('user selected: ', selection)

  // to reset the checkboxes
  document.querySelectorAll('.custom-check').forEach(_checkbox=>{
    (_checkbox).checked = false
  })
}  
  

const handleSubmit = (e) => {
  e.preventDefault()
  console.log('button was clicked :)')
  var input = document.getElementById('inputSearch').value
  console.log('user said: ', input)

  axios.post('/search', input.toString())
    .then(function (response) {
      console.log(response)
    }) 
    .then(function (error) {
      console.log(error)
    })
    .then(function () {
      document.getElementById('searchForm').reset();
    })

  // maybe trigger animation?
  // create result as a component so i can load it after search
}