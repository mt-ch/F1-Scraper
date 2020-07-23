import React, { Component } from 'react'
import AusFlag from '../../assets/austriaFlag.png';
import './css/schedule.scss';
import Test from './test';
import moment from 'moment'

export default function Round({schedule}){
        return (
            <main>
                <section id="info">
                    <h2 id="date">Round {schedule.round} | {moment(schedule.date).format("Do MMM") } </h2>
                    <div id="country-grid">
                        <section id="country">
                            <h1>{schedule.country}</h1>
                            <img id='img' src={require(`../../assets/scheduleFlags/${schedule.country}.png`)} />
                        </section>
                      
                        <section id="track">
                            <Test/>
                        </section>
                    </div>
                    <h3>{schedule.name}</h3>
                </section>         
            </main>
        )
    }

