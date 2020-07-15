import React, { Component } from 'react'
import HunFlag from '../../../assets/hungary.jpg';
import '../css/schedule.scss';
import Test from '../test';

export class austriaRndOne extends Component {
    render() {
        return (
            <main>
                <section id="info">
                    <h3>Up next...</h3>
                    <h2 id="date">Round 3 | 17 - 19 Jul</h2>
                    <div id="country-grid">
                        <section id="country">
                            <h1>Hungary</h1>
                        </section>
                        <section id="flag">
                            <img id="img" src={HunFlag}/>
                        </section>
                        <section id="track">
                            <Test/>
                        </section>
                    </div>
                    <h2>Formula 1 Aramco Magyar Nagydíj 2020</h2>
                </section>         
            </main>      
        )
    }
}

export default austriaRndOne