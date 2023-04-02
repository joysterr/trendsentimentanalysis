import React from 'react'
import './Info.css'

export default function Info() {
    return (
        <>
            <div className="info-container">
                <div className='page-title'>
                    <h1>Information & Instructions</h1>
                </div>
                <div className='box-row'>
                    <div className="black-box">
                        <h2 className="box-title">Sentiment Analysis</h2>
                        <ul className="box-list">
                            <li>0. Head to 'Tsa' page </li>
                            <li>1. Carefully type your search query into the search box </li>
                            <li>2. Click the search button </li>
                            <li>3. Customise the report by chosing given options</li>
                            <li>3.1. For full tabular results choose 'result table' option</li>
                            <li>4. Results in graphical form generated</li>
                            <li>5. Hover over graph results to see values</li>
                        </ul>

                    </div>
                    <div className="black-box">
                        <h2 className="box-title">Sarcasm Detection</h2>
                        <ul className="box-list">
                            <li>0. Head to 'Tsa' page </li>
                            <li>1. Carefully type your search query into the search box </li>
                            <li>2. Click the search button </li>
                            <li>3. Ensure you tick 'Sarcasm Detection' </li>
                            <li>4. Results generated as a pie chart</li>
                            <li>5. Hover over graph results to see values</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
