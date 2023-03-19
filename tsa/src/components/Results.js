import React, { useEffect, useState } from 'react'
import './Results.css'
import axios from 'axios'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie } from 'recharts';
// import ReactWordcloud from 'react-wordcloud'

export default function Results({ selection }) {
  const sel = selection
  const [inputQ, setInputQ] = useState()
  const [sentiData, setSentiData] = useState([])
  const [sarcData, setSarcData] = useState([])
  // const [tweets, setTweets] = useState([])


  // axios request
  function getAxiosData() {
    axios.get('/search/recent').then((response) => {
      if (response.status === 200) {
        if (response.data) {
          setInputQ(response.data.input)
          setSentiData(response.data.senti)
          setSarcData(response.data.sarc)
          // setTweets(response.data.tweets)
        }
      }
    })
  }

  const sentiData2 = [
    {
      name: 'positive',
      amt: sentiData[0],
      fill: '#82ca9d'
    },
    {
      name: 'negative',
      amt: sentiData[1],
      fill: '#8884d8'
    }
  ]

  const sarcData2 = [
    {
      name: 'sarcastic',
      amt: sarcData[0],
      fill: '#82ca9d'
    },
    {
      name: 'not sarcastic',
      amt: sarcData[1],
      fill: '#8884d8'
    }
  ]

  // GENERATE GRAPHS
  const createBar = (inputData) => {
    return (
      <BarChart
        width={500}
        height={500}
        data={inputData}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Bar dataKey='amt' />
      </BarChart>
    )
  }

  const createPie = (inputData) => {
    return (
      <PieChart width={500} height={500}>
        <Pie
          data={inputData}
          dataKey='amt'
          outerRadius={220}
          fill='fill'
        />
        <Legend />
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

  // const SimpleWordcloud = (words) => {
  //   return (
  //     <ReactWordcloud
  //       words={words}
  //       size={[500, 500]}
  //     />
  //   )
  // }


  useEffect(() => {
    getAxiosData()
  }, [])

  return (
    <>
      <div className='results-region'>
        <h2>Your customised report:</h2>
        <br />
        <div>user input was: {inputQ}</div>
        <div className='graphs-container'>
          {sel[0] ? <div className='graphs'><p>Sentiment Analysis Barchart</p>{createBar(sentiData2)}</div> : null} <br />
          {sel[1] ? <div className='graphs'><p>Sentiment Analysis Piechart</p>{createPie(sentiData2)}</div> : null} <br />
          {sel[2] ? <div className='graphs'><p>Sarcasm Detection Piechart</p>{createBar(sarcData2)}</div> : null} <br />
          {/* {sel[3] ? <div className='graphs'><p>Wordcloud</p>{SimpleWordcloud(words)}</div> : null} <br/> */}
        </div>
      </div>
    </>
  )
}
