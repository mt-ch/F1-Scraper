import React from 'react'
import {} from '@material-ui/core';
import './css/resultsCard.scss';

function sliceName(name) {
    var str = name;
    var res = str.slice(0, 1);
    return res;
}

export default function raceResults({results}){
    return(
        <div id="resultContainer">
            <h5>{results.pos}</h5>
            <p>{sliceName(results.firstName)}.{results.lastName}</p>
            <h4>{results.points}</h4>
        </div>
    )
}
