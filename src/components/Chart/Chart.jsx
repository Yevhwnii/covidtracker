import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api'
import {Line, Bar} from 'react-chartjs-2'

import styles from './Chart.module.css'

const Chart = props => {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }
        
        fetchAPI()
    }, [])

    const lineChart = (
        dailyData.length  ? (
        <Line
            data={{
                labels: dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill:true
                },
                {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill: true
                    }]
            }}
        />
        ) : null
    )
    const barChart = (
        props.data.confirmed ? 
        <Bar 
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    labels: 'People',
                    backgroundColor: [
                        'rgba(0,0,255,0.5)',
                        'rgba(0,255,0,0.5)',
                        'rgba(255,0,0,0.5)',
                    ],
                    data: [
                        props.data.confirmed.value,
                        props.data.recovered.value,
                        props.data.deaths.value
                    ]
                }]
            }}
            options ={{
                legend: {display:false},
                title: {display:true, tex:`Current state in ${props.country}`}
            }}
        />
        : null
    )

    return (
       <div className={styles.container}>
            {props.country ? barChart : lineChart }
       </div>
    )
};

export default Chart;

// Line is a type of chart in chart.js. Following my code, if there is daily data,
// we create a line chart, passing into data prop two object, which is what we want to display
// on chart. In our case it is confimed cases and deaths. For each object we pass labels, 
// which is mapping throught daily data array of objects and destructuring date and assigning it as a label
// Second field in object is a dataset field, with data itself and options to it. So in the very end we have:
// Label: date and Data: number of cases on that date.