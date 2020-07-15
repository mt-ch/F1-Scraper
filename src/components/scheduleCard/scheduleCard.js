import React, { Component } from 'react';
import { Card, CardContent, styled} from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'
import AustriaRndOne from './rounds/austriaRndOne';
import AustriaRndTwo from './rounds/austriaRndTwo';
import HungaryRndThree from './rounds/hungaryRndThree';
import './css/schedule.scss'; 

const MyCard = styled(Card)({
    background: '#00000032',
    borderStyle: 'solid',
    borderWidth: 'medium',
    borderColor: '#0000004B'
});

// function createSchedule(round, name, date, time, curcuit, localName, country){
//     return {round, name, date, time, curcuit, localName, country};
// }

// let schedule = [];

// async function getCurrentSchedule(){
//     const url = "http://ergast.com/api/f1/current.json";
//     const response = await fetch(url);
//     const data = await response.json();
//     const { MRData: { RaceTable: { Races } } } = data;

//     for (const {round: rnd, raceName: name, time: time, date: date, Circuit: {circuitName: trackName, Location: {locality: localName, country: country}} } of Races){
//         schedule.push(
//             createSchedule(rnd, name, date, time, trackName, localName, country )
//         )
//         console.log(rnd, name, date, time, trackName, localName, country)
//     }
// }

export class scheduleCard extends Component {
    render() {
        return (
            <div id="card">
                <MyCard>
                    <div id="bg">
                        <CardContent>                    
                            <Carousel
                                next={ () => {/* Do stuff */} }
                                prev={ () => {/* Do other stuff */} }
                                indicators={false}
                                autoPlay={false}
                            >
                                <AustriaRndOne/> 
                                <AustriaRndTwo/>
                                <HungaryRndThree/>
                            </Carousel>
                        </CardContent>
                    </div>
                </MyCard>
            </div>
        )
    }
}

export default scheduleCard
