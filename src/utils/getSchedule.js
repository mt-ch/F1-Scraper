function createSchedule(round, name, date, time, circuit, localName, country, shortName){
    return {round, name, date, time, circuit, localName, country, shortName};
}

export default async function getSchedule(){
    let schedule = [];
    const url = "http://ergast.com/api/f1/current.json";
    const response = await fetch(url);
    const data = await response.json();
    const { MRData: { RaceTable: { Races } } } = data;
    for (const {round: rnd, raceName: name, time: time, date: date, Circuit: {circuitName: trackName, Location: {locality: localName, country: country}} } of Races){
        const shortName = name.split(" ").slice(0, -2)+" GP";
        schedule.push(
            createSchedule(rnd, name, date, time, trackName, localName, country, shortName)
        )
    }
    return schedule
}