import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import './Table.css'

export default function Table() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/downloadcsv')
            .then(response => {
                const parsedData = Papa.parse(response.data).data;
                setData(parsedData);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {data[0] && Object.keys(data[0]).map(key => (
                            <th key={key}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {Object.values(row).map((value, columnIndex) => (
                                <td key={columnIndex}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}



