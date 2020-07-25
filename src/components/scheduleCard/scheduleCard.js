import React, { Component } from 'react'
import { Card, CardContent, styled, Box} from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import Round from './round'
import GetSchedule from '../../utils/getSchedule'

const MyCard = styled(Card)({
    background: '#574f7d85',
    borderStyle: 'solid',
    borderWidth: 'medium',
    borderColor: '#0000004B',
    borderRadius: '1em'
});

function createSchedule(round, name, date, time, circuit, localName, country){
    return {round, name, date, time, circuit, localName, country};
}

let schedule = [];

async function getCurrentSchedule(){
    const url = "http://ergast.com/api/f1/current.json";
    const response = await fetch(url);
    const data = await response.json();
    const { MRData: { RaceTable: { season, Races } } } = data;
    for (const {round: rnd, raceName: name, time: time, date: date, Circuit: {circuitName: trackName, Location: {locality: localName, country: country}} } of Races){
        schedule.push(
            createSchedule(rnd, name, date, time, trackName, localName, country )
        )
    }
    console.table(schedule)
    return schedule
}

export class scheduleCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rSchedule: [],
            isLoading: false,
        };
    }
    componentWillMount(){
        this.setState({ isLoading: true });
        GetSchedule()
            .then(data => this.setState({ rSchedule: data, isLoading: false,}));
    }
    render() {
        const {rSchedule, isLoading} = this.state;
        if (isLoading) {
            return <p>Loading ...</p>;
        }
        else
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
                                {rSchedule.map(schedule => (
                                    <Round schedule={schedule}/>
                                ))}
                            </Carousel>
                        </CardContent>
                    </div>
                </MyCard>
            </div>
        )
    }
}

export default scheduleCard
