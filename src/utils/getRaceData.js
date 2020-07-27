function createRaceData(pos, firstName, lastName, points, time) {
    return { pos, firstName, lastName, points, time};
}

export default async function getRaceData(raceNumber){
    let resultRace = [];
    const url = "http://ergast.com/api/f1/2020/"+raceNumber+"/results.json";
    const response = await fetch(url);
    const data = await response.json();
    const { MRData: { RaceTable: { Races: [list] } } } = data;
    const { Results } = list;

    for (const { position: pos, points: pts, Driver: { familyName: lastName, givenName: firstName }} of Results) {
        resultRace.push(
            createRaceData(pos, firstName, lastName, pts)
        )
    }
    return resultRace;
}