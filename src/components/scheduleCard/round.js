import React, { Component } from 'react'
import Track from './track';
import moment from 'moment'

export default function Round({schedule}){
    return (
        <section id="info">
            <h2 id="date">Round {schedule.round} | {moment(schedule.date).format("Do MMM") } </h2>
            <div id="country-grid">
                <div id="country">
                    <h1>{schedule.country}</h1>
                    <img id='img' src={require(`../../assets/scheduleFlags/${schedule.country}.png`)} />
                </div>
                <div id="track">
                    <Track/>
                </div>
            </div>
            <h3>{schedule.name}</h3>
        </section>         
    )
}

