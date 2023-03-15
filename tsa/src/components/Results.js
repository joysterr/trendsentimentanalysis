import React, { useState } from 'react'
import './Results.css'
import axios from 'axios'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie } from 'recharts';
import ReactWordcloud from 'react-wordcloud'

export default function Results({selection}) {
  const sel = selection
  const [sentiData, setSentiData] = useState()
  const [sarcData, setSarcData] = useState()
  const [words, setWords] = useState()
  const [inputQuery, setInputQuery] = useState()

  axios.get('/searchresults')
    .then((response) => {
      console.log('this activated')
      if (response.data) {
        //setSentiData(response.data)
        // setSarcData(response2)
        // setWords(response3)
        // setInputQuery(response4)
        const save = response.data
        console.log('user said this:', {save})
      }
    }) 

  const sentiData2 = [
    {
      name: 'positive',
      amt: 100,
      fill: '#82ca9d'
    },
    {
      name: 'negative',
      amt: 20,
      fill: '#8884d8'
    }
  ]

  const createBar =(inputData) => {
    return (
      <BarChart
        width = {500}
        height = {500}
        data = {inputData}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Bar dataKey='amt' />
      </BarChart>
    )
  }

  const createPie =(inputData) => {
    return (
      <PieChart width={500} height={500}>
        <Pie
          data={inputData}
          dataKey='amt'
          outerRadius={220}
          fill='fill'
        />
        <Legend/>
        <Tooltip />
      </PieChart>
    )
  }

  // const words = [
  //   {
  //     text: 'told',
  //     value: 64,
  //   },
  //   {
  //     text: 'mistake',
  //     value: 11,
  //   },
  //   {
  //     text: 'thought',
  //     value: 16,
  //   },
  //   {
  //     text: 'bad',
  //     value: 17,
  //   },
  // ]

  const SimpleWordcloud = (words) => {
    return (
      <ReactWordcloud 
        words={words}
        size = {[500, 500]}
      />
    )
  }

  return (
    <>
      <div className='results-region'>
        <h2>Your customised report:</h2>
        <br/>
        <div className='graphs-container'>
          {sel[0] ? <div className='graphs'><p>Sentiment Analysis Barchart</p>{createBar(sentiData)}</div> : null} <br/>
          {sel[1] ? <div className='graphs'><p>Sentiment Analysis Piechart</p>{createPie(sentiData)}</div> : null} <br/>
          {sel[2] ? <div className='graphs'><p>Sarcasm Detection Piechart</p>{createBar(sarcData)}</div> : null} <br/>
          {sel[3] ? <div className='graphs'><p>Wordcloud</p>{SimpleWordcloud(words)}</div> : null} <br/>
        </div>
      </div>
    </>
  )
}
