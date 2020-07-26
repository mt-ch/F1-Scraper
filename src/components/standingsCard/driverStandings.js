import React from 'react'
import './css/standings.scss';

export default function driverStandings({data}) {
    return (
        <div id="driverInfo" >
            <section id="pos">
                <h1><strong>{data.pos}</strong></h1>
            </section>
            <section id="name">
                <p><strong>{data.firstName} {data.lastName}</strong></p>
                <p>{data.cName}</p>
            </section>
            <img id="flag"src={require(`../../assets/flags/${data.nationality}.png`)}/>
            <section id="points">
                <h3><strong>{data.pts} Pts</strong></h3>
            </section>
            <div id="driver">
                <img id='icon' src={require(`../../assets/drivers/${data.dId}.png`)} />
                <h5 id="number">{data.number}</h5>
            </div>
        </div>
    )
}
