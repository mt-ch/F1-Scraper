import React, { Component } from 'react'
import AusFlag from '../../assets/austriaFlag.png';
import './schedule.css';
import Test from './test';

export class austriaRndOne extends Component {
    render() {
        return (
            <div className="grid-container-schedule">
                <section className="roundInfo">
                    <div className="grid-container-round">
                        <section className="greeting">
                            <h3>Up next...</h3>
                        </section>
                        <section className="date">
                            <h2>Round 1 | 03-05 July</h2>
                        </section>
                        <section className="country">
                            <h2>Austria</h2>
                        </section>
                        <section className="flag">
                            <img className="img" src={AusFlag}/>
                        </section>
                        <section className="raceName">
                            <h2>Formula 1 Rolex Grosser Pries Von Österreich 2020</h2>
                        </section>
                    </div>
                </section>   
                <div className="track">
                    <Test/>
                </div>
            </div>
        )
    }
}

export default austriaRndOne