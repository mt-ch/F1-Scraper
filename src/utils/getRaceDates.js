function createDates(index, date){
    return {index, date};
}

export default async function getSchedule(){
    let schedule = [];
    const url = "http://ergast.com/api/f1/current.json";
    const response = await fetch(url);
    const data = await response.json();
    const { MRData: { RaceTable: { Races } } } = data;
    for (const {round: rnd, date: date } of Races){
        createDates.push(
            createSchedule(rnd, name, date, time, trackName, localName, country, shortName)
        )
    }
    console.table(schedule)
    return schedule
}