import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'

import styles from './Cards.module.css'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate }}) => {
    if (!confirmed) {
        return 'Loading ...'
    }
    
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5" >
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator="."
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5" >
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator="."
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5" >
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator="."
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
};

export default Cards;

// Grid is type of container that wraps all other cards
// So you create one grid with prop container - it is gonna hold everything
// And then each following grid will have item prop - which defines it as a child of this parent container
// Then we pass component to our grid idk why (material-ui component)
// Then we using CardContent component to specify content of a card
// Typography - is just better styled text. gutterBottom - creates fancy padding at the bottom
// There are also props for responsivness so that xs prop on grid means how much width (0-12) to take on small devices
// md - medium devices like tablets.