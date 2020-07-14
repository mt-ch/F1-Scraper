import React, { Component } from 'react'
import AusFlag from '../../assets/austriaFlag.png';
import './schedule.css';
import Test from './test';
import { Typography } from '@material-ui/core';

export class austriaRndOne extends Component {
    render() {
        return (
            <div className="grid-container-schedule">
                <section className="roundInfo">
                    <div className="grid-container-round">
                        <section className="greeting">
                            <Typography variant="h6">Up next...</Typography>
                        </section>
                        <section className="date">
                            <Typography variant="h5">Round 1 | 03-05 July</Typography>
                        </section>
                        <section className="country">
                            <Typography variant="h2">Austria</Typography>
                        </section>
                        <section className="flag">
                            <img className="img" src={AusFlag}/>
                        </section>
                        <section className="raceName">
                            <Typography variant="h5">Formula 1 Rolex Grosser Pries Von Österreich 2020</Typography>
                        </section>
                    </div>
                </section>   
                <section className="track">
                    <Test/>
                </section>
            </div>
        )
    }
}

export default austriaRndOne