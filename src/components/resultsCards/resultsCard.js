import React, { Component } from 'react'
import { Card, CardContent, styled } from '@material-ui/core'
import getSchedule from '../../utils/getSchedule'
import RaceTab from './raceTab'
import '../../css/App.scss'

const MyCard = styled(Card)({
    background: '#574f7d85',
    borderStyle: 'solid',
    borderWidth: 'medium',
    borderColor: '#0000004B',
    borderRadius: '1em'
})

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
                <MyCard>
                    <div id="bg">
                        <CardContent>
                                <section id="results">
                                    <RaceTab schedule={schedule}/>
                                </section>
                        </CardContent>
                    </div>
                </MyCard>
            </div>
        )
    }
}

export default resultsCard
