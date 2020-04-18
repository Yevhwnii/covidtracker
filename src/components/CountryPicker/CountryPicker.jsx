import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core'

import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../api'

const CountryPicker = props => {
    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const fetchApi  = async () => {
            setFetchedCountries(await fetchCountries())
        }

        fetchApi()
    }, [setFetchedCountries])

    console.log(fetchedCountries);
    
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="Poland" onChange={(e) => props.handler(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
};

export default CountryPicker;

// Form control i think is exchange for <form> and optimized and works better
// Native select is just optimized dropdown, also is fine