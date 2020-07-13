import React, { Component } from 'react';
import { Card, CardContent, CardMedia, styled, Box, Grid } from '@material-ui/core';
import AusFlag from '../../assets/austriaFlag.png';
import Carousel from 'react-material-ui-carousel'
import Test from './test';
import './sc.css';

const MyCard = styled(Card)({
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    background: '#00000032',
    paddingLeft: 50,
    marginTop: 15,
});

const Flag = styled(CardMedia)({
    height: 20,
    width: 40,
});

function createSchedule(round, name, date, time, curcuit, localName, country){
    return {round, name, date, time, curcuit, localName, country};
}

let schedule = [];

async function getCurrentSchedule(){
    const url = "http://ergast.com/api/f1/current.json";
    const response = await fetch(url);
    const data = await response.json();
    const { MRData: { RaceTable: { Races } } } = data;

    for (const {round: rnd, raceName: name, time: time, date: date, Circuit: {circuitName: trackName, Location: {locality: localName, country: country}} } of Races){
        schedule.push(
            createSchedule(rnd, name, date, time, trackName, localName, country )
        )
        console.log(rnd, name, date, time, trackName, localName, country)
    }
}

export class scheduleCard extends Component {

    async componentDidMount(){
        getCurrentSchedule();
    }

    render() {
        return (
            <MyCard>
                <CardContent>
                    <Carousel
                        next={ () => {/* Do stuff */} }
                        prev={ () => {/* Do other stuff */} }
                        indicators={false}
                        autoPlay={false}
                    >
                        {/* data */}
                        <Grid
                            container
                            direction="column"
                        >
                            <Grid 
                                container
                                direction="row"
                            >
                                <Grid item xs={12}>
                                    <h3>
                                        Up Next...                           
                                    </h3> 
                                </Grid>
                                <Grid item xs={12}>
                                    <h2>
                                        Round  | 
                                    </h2>

                                    
                                </Grid>
                            </Grid>
                            <Grid 
                                container
                                direction="row"
                                className="info"
                            >
                                <Grid item xs={0}>
                                    <h1>
                                        Austria
                                    </h1>
                                </Grid>
                                <Grid item xs={0} className="flag">
                                  <Flag image={AusFlag} />
                                </Grid>
                                <Grid item xs={6} className="track">
                                    <Test/>
                                </Grid>
                            </Grid>
                            <Grid item xs={5}>
                                <h3>
                                    Formula 1 Rolex Grosser Pries Von Österreich 2020
                                </h3>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            direction="column"
                        >
                            <Grid 
                                container
                                direction="row"
                            >
                                <Grid item xs={12}>
                                    <h3>
                                        Up Next...                           
                                    </h3> 
                                </Grid>
                                <Grid item xs={12}>
                                    <h2>
                                     Round 2 | 10-12 July  
                                    </h2> 
                                </Grid>
                            </Grid>
                            <Grid 
                                container
                                direction="row"
                            >
                                <Grid item xs={0}>
                                    <h1>
                                        Austria
                                    </h1>
                                </Grid>
                                <Grid item xs={0}>
                                  <Flag image={AusFlag} />
                                </Grid>
                                <Grid item xs={5}>
                                    <Test/>
                                </Grid>
                            </Grid>
                            <Grid item xs={5}>
                                <h3>
                                   Formula 1 Pirelli Grosser Preis Der Steiermark 2020
                                </h3>
                            </Grid>
                        </Grid>
                        
                        <Grid
                            container
                            direction="column"
                        >
                            <Grid 
                                container
                                direction="row"
                            >
                                <Grid item xs={12}>
                                    <h3>
                                        Up Next...                           
                                    </h3> 
                                </Grid>
                                <Grid item xs={12}>
                                    <h2>
                                    Round 3 | 17-19 July 
                                    </h2> 
                                </Grid>
                            </Grid>
                            <Grid 
                                container
                                direction="row"
                            >
                                <Grid item xs={0}>
                                    <h1>
                                       Hungary
                                    </h1>
                                </Grid>
                                <Grid item xs={0}>
                                  <Flag image={AusFlag} />
                                </Grid>
                                <Grid item xs={5}>
                                    <Test/>
                                </Grid>
                            </Grid>
                            <Grid item xs={5}>
                                <h3>
                                     Formula 1 Aramco Magyar Nagydij 2020
                                </h3>
                            </Grid>
                        </Grid>
                    </Carousel>
                </CardContent>
            </MyCard>
            
        )
    }
}

export default scheduleCard
