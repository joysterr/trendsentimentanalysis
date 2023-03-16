import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './Tsa.css'
import Results from '../components/Results'

export default function Tsa() {
  const [showReport, setShowReport] = useState(false)
  const [selection, setSelection] = useState()
  const [responseData, setResponse] = useState({})




  const handleSubmit = (e) => {
    // e.preventDefault()
    console.log('button was clicked :)')
    var input = document.getElementById('inputSearch').value
    console.log('user said: ', input)
  
    axios.post('/search', input.toString())
      .then(function (response) {
        console.log(response)
        setResponse(response)
      }) 
      .then(function (error) {
        console.log(error)
      })
      .then(function () {
        document.getElementById('searchForm').reset();
      })
  }






  function customiseReport() {
    console.log('customise button clicked!')
    var selection = [
      document.getElementById('bar').checked, 
      document.getElementById('pie').checked,
      document.getElementById('sarc').checked,
      document.getElementById('wordm').checked
    ]
    console.log('user selected: ', selection)
    setShowReport(true)
    setSelection(selection)
  
    // to reset the checkboxes
    document.querySelectorAll('.custom-check').forEach(_checkbox=>{
      (_checkbox).checked = false
    })
  }  

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
    
      {showReport ? <Results selection={selection} /> : null}

    </>
  )
}