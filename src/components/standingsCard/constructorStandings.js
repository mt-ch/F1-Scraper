import React from 'react';
import { Paper } from '@material-ui/core';
import './css/standings.scss';

export default function constructorStandings({data}) {
    return (
        <Paper id="teamInfo">
            <section id="pos">
                <h1><strong>{data.pos}</strong></h1>
            </section>
            <section id="name">
                <p><strong>{data.constructor}</strong></p>
            </section>
            <section id="points">
                <h3><strong>{data.pts} Pts</strong></h3>
            </section>
            <section id="team">
                <img id='teamLogo' src={require(`../../assets/teams/${data.cId}.png`)} alt={'Team logo'} />
                <img id='teamCar' src={require(`../../assets/cars/${data.cId}.png`)} alt={'Team car'} />
            </section>
        </Paper>
    )
}
