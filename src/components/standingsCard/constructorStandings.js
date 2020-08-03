import React from 'react';
import { Paper } from '@material-ui/core';
import './css/standings.scss';

const ConstructorStandings = ({standings, loading, active}) => {
    if(!active){
        if(loading) {
            return <h2>Loading...</h2>
        }
        return (
            <ul style={{listStyleType: 'none', padding: 0}}>
                {standings.map(standing =>  (
                    <li key={standing.pos}>
                        <Paper id="teamInfo" >
                            <div id="pos">
                                <h1><strong>{standing.pos}</strong></h1>
                            </div>
                            <div id="nameTeam">
                                <p><strong>{standing.constructor}</strong></p>
                            </div>
                            <div id="points">
                                <h3><strong>{standing.pts} Pts</strong></h3>
                            </div>
                            <div id="team">
                                <img id='teamLogo' src={require(`../../assets/teams/${standing.cId}.png`)} alt={'Team logo'} />
                                <img id='teamCar' src={require(`../../assets/cars/${standing.cId}.png`)} alt={'Team car'} />
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

export default ConstructorStandings
