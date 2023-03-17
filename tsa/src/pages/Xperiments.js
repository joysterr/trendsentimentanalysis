import React from 'react'
import Poetry from '../components/Poetry'
import './Xperiments.css'

export default function Xperiments() {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('wanna read a poetry huh? \n give me a <br/>')
    document.getElementById('inputPoemStart').value = '' //reset
  }

  return (
    <>
      <div className='container-xp'>
        <h1>Welcome to Xperiments</h1>
        <div>(please have your safety goggles ready 😎)</div>
      </div>
      <div className='search-bar'>
        <p>Start typing first line of your poetry</p>
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
