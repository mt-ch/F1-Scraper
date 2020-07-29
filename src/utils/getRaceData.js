function createRaceData(pos, name, points, time) {
    return { pos, name, points, time};
}

export default async function getRaceData(raceNumber){
    let resultRace = [];
    let noResult = true;
    const url = "http://ergast.com/api/f1/2020/"+raceNumber+"/results.json";
    const response = await fetch(url);
    const data = await response.json();
    const { MRData: { RaceTable: { Races: [list= 'n/a'] } } } = data;
    const { Results = 'n/a' } = list;
    if(Results != 'n/a'){
        for (const { position: pos, points: pts, Driver: { familyName: lastName, givenName: firstName }, Time: { time: time} = {time: 'n/a'}} of Results) {
            const name = firstName.slice(0, 1)+'.'+lastName;
            resultRace.push(
                createRaceData(pos, name, pts, time)
            )
        }
        return resultRace;
    }
    else{
        return noResult;
    }
}