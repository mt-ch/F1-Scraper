function createSchedule(round, name, date, time, circuit, localName, country){
    return {round, name, date, time, circuit, localName, country};
}

export default async function getSchedule(){
    let schedule = [];
    const url = "http://ergast.com/api/f1/current.json";
    const response = await fetch(url);
    const data = await response.json();
    const { MRData: { RaceTable: { season, Races } } } = data;
    for (const {round: rnd, raceName: name, time: time, date: date, Circuit: {circuitName: trackName, Location: {locality: localName, country: country}} } of Races){
        schedule.push(
            createSchedule(rnd, name, date, time, trackName, localName, country )
        )
    }
    return schedule
}