function createData(rank, driver, points, wins){
    return {rank, driver, points, wins};
}


export default function getDriverStandings() {
    return (
        fetch('http://ergast.com/api/f1/current/driverStandings.json')
        .then((response) => {
            response.json()
        })
        .then((data) => {
            const { MRData: { StandingsTable: { StandingsLists: [list]} } } = data;
            const { season, round, DriverStandings } = list;

            let driverStand = [];

            for (const {
                position: pos, positionText: posTxt, points: pts,
                wins: win, Driver: {familyName: lastName, givenName: firstName} 
                }
                of DriverStandings){
                    driverStand.push(
                        createData(pos, lastName, pts, win)
                    )
            }
            console.log(driverStand)
            return driverStand;
        })
        .catch((err) => {
            // Do something for an error here
        })
    )
}


export function getConstructorStandings(){
    return(
        fetch('http://ergast.com/api/f1/current/constructorStandings.json')
        .then((response) => {
        return response.json()
        })
        .then((data) => {
        // Work with JSON data here
        console.log(data)
        })
        .catch((err) => {
        // Do something for an error here
        })
    )
}

export function getLastResult(){
    return(
        fetch('http://ergast.com/api/f1/current/last/results.json')
        .then((response) => {
        return response.json()
        })
        .then((data) => {
        // Work with JSON data here
        console.log(data)
        })
        .catch((err) => {
        // Do something for an error here
        })
    )
}

export function getlatestSchedule(){
    return(
        fetch('http://ergast.com/api/f1/current.json')
        .then((response) => {
        return response.json()
        })
        .then((data) => {
        // Work with JSON data here
        console.log(data)
        })
        .catch((err) => {
        // Do something for an error here
        })
    )
}