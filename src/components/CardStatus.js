import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CardStatus() {
    const [cases, setCases] = useState(0);
    const [recovered, setRecovered] = useState(0);
    const [deaths, setDeaths] = useState(0);

    useEffect(() => {
        axios.get('https://disease.sh/v2/all')
            .then(response => {
                console.log(response);
                setCases(response.data.cases);
                setRecovered(response.data.recovered);
                setDeaths(response.data.deaths);
            })
            .catch(error => console.log('Error, API failed to load.'));
    }, []);

    return (
        <div className='columns'>
            <div className='column'>
                <div className='card'>
                    <div className='card-content'>
                        <p className='subtitle'>Cases</p>
                        <p>{cases}</p>
                    </div>
                </div>
            </div>

            <div className='column'>
                <div className='card'>
                    <div className='card-content'>
                        <p className='subtitle'>Recovered</p>
                        <p>{recovered}</p>
                    </div>
                </div>
            </div>

            <div className='column'>
                <div className='card'>
                    <div className='card-content'>
                        <p className='subtitle'>Deaths</p>
                        <p>{deaths}</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default CardStatus;