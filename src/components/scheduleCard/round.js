import React, { Component } from 'react'
import moment from 'moment'
import Track from './track'

export default function Round({schedule}){
    return (
        // iterate schedule info for each slide
        <section id="info">
            <h2 id="date">Round {schedule.round} | {moment(schedule.date).format("Do MMM") } </h2>
            <div id="country-grid">
                <div id="country">
                    <h1>{schedule.country}</h1>
                    <img id='img' src={require(`../../assets/scheduleFlags/${schedule.country}.png`)} />
                </div>
                <div id="track">
                    <Track country={schedule.country}/>
                </div>
            </div>
            <h3>{schedule.name}</h3>
        </section>         
    )
}

