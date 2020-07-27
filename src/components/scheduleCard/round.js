import React from 'react'
import moment from 'moment'
import Track from './track'

export default function Round({schedule}){
    return (
        // iterate schedule info for each slide
        <section id="info">
            
            <div id="country-grid">
                <h3 id="date">Round {schedule.round} | {moment(schedule.date).format("Do MMM") } </h3>
                <div id="country">
                    <h1>{schedule.country}</h1>
                    <img id='img' src={require(`../../assets/scheduleFlags/${schedule.country}.png`)} alt={'Flag'} />
                </div>
                <div id="track">
                    <Track country={schedule.country}/>
                </div>
                <div id="raceInfo">
                <h3>{schedule.name}</h3>
                <p>{schedule.circuit}</p>
            </div>
            </div>
            
        </section>         
    )
}

