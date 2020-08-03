import React from 'react'
import { Paper } from '@material-ui/core';
import './css/standings.scss';

const standings = ({standings, loading, active}) => {
    if(active){
    if(loading) {
        return <h2>Loading...</h2>
    }
        return (
            <ul style={{listStyleType: 'none', padding: 0 }}>
                {standings.map(standing =>  (
                    <li key={standing.pos}>
                        <Paper id="driverInfo" >
                            <div id="pos">
                                <h1><strong>{standing.pos}</strong></h1>
                            </div>
                            <div id="name">
                                <p><strong>{standing.firstName} {standing.lastName}</strong></p>
                                <p>{standing.cName}</p>
                            </div>
                            <img id="flag"src={require(`../../assets/flags/${standing.nationality}.png`)} alt={"flag"}/>
                            <div id="points">
                                <h3><strong>{standing.pts} Pts</strong></h3>
                            </div>
                            <div id="driver">
                                <img id='icon' src={require(`../../assets/drivers/${standing.dId}.png`)} alt={"driver"} />
                                <h5 id="number">{standing.number}</h5>
                            </div>
                        </Paper>
                    </li>
                ))}
            </ul>
        )
    }
    else{
        return null
    }
}

export default standings
