import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

function LineChart() {
    
    const [datesData, setDatesData] = useState([]);
    const [casesData, setCasesData] = useState([]);
    const [recoveredData, setRecoveredData] = useState([]);
    const [deathsData, setDeathsData] = useState([]);

    useEffect(() => {
        axios.get('https://disease.sh/v2/historical/all', {params: {lastdays: 14}})
            .then(response => {
                console.log(response);
                setDatesData(Object.keys(response.data.cases));
                setCasesData(Object.values(response.data.cases));
                setRecoveredData(Object.values(response.data.recovered));
                setDeathsData(Object.values(response.data.deaths));
            })
            .catch(error => console.log('Error, fetching data for graph failed.'))
    }, []);

    const lineData = {
        labels: datesData,
        datasets: [
            {
                label: 'Cases',
                data: casesData
            },
            {
                label: 'Recovered',
                data: recoveredData
            }, 
            {
                label: 'Deaths',
                data: deathsData
            }
        ]
    }

    return (
        <Line 
            data={lineData}
        />
    );
}

export default LineChart;