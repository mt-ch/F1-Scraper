import React, { Component } from 'react'
import AusFlag from '../../../assets/austriaFlag.png';
import '../css/schedule.scss';
import Test from '../test';

export class austriaRndOne extends Component {
    render() {
        return (
            <main>
                <section id="info">
                    <h3>Up next...</h3>
                    <h2 id="date">Round 1 | 03 - 05 Jul</h2>
                    <div id="country-grid">
                        <section id="country">
                            <h1>Austria</h1>
                        </section>
                        <section id="flag">
                            <img id="img" src={AusFlag}/>
                        </section>
                        <section id="track">
                            <Test/>
                        </section>
                    </div>
                    <h2>Formula 1 Rolex Grosser Pries Von Österreich 2020</h2>
                </section>         
            </main>      
        )
    }
}

export default austriaRndOne
