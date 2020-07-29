import React, { Component } from 'react'
import { } from '@material-ui/core'
import getSchedule from '../../utils/getSchedule'
import RaceTab from './raceTab'

export class resultsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            raceResults: [],
            schedule: [],
            isLoading: false,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        getSchedule()
            .then(data => this.setState({ schedule: data, isLoading: false}))
    }

    render() {
        const {schedule, isLoading} = this.state;
        if (isLoading) {
            return <p>Loading ...</p>;
        }
        else
        return (
            <div id="card">
                <section id="title">
                    <h1 id="title"><strong>Results</strong></h1>
                </section>
                <section id="resultsTable">
                    <RaceTab schedule={schedule}/>
                </section>
            </div>
        )
    }
}

export default resultsCard
