import React, {Component} from 'react';

import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import {fetchData} from './api'

import coronaImage from './images/image.png'

class App extends Component {

    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData()
        this.setState({data:fetchedData})
        
    }

    handleCountryChange = async (country) => {
        // fetch data
        const fetchedData = await fetchData(country) 
        // set state
        this.setState({data:fetchedData, country:country})
    }


    render() {
        const {data, country} = this.state


        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19" />
                <h1>ЕРИК ПИДАРАС ЗАВАЛИ ЕБАЛО</h1>
                <Cards data={data} />
                <CountryPicker handler={this.handleCountryChange} />
                <Chart data={data} country={country}/>
            </div>
        )
    }
};

export default App;

// Whenever you have index.js you don`t to manually specify it since it is default behavior