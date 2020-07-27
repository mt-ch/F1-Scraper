function createDriverData(dId, firstName, lastName, nationality, number, pos, pts, wins, cId, cName) {
    return { dId, firstName, lastName, nationality, number, pos, pts, wins, cId, cName };
}

export default async function getDriverStandings() {
    let driverStand = [];
    const url = "http://ergast.com/api/f1/current/driverStandings.json";
    const response = await fetch(url);
    const data = await response.json();
    const { MRData: { StandingsTable: { StandingsLists: [list] } } } = data;
    const { DriverStandings } = list;

    for (const { position: pos, points: pts, wins: win, Driver: { driverId: dId, permanentNumber: number, familyName: lastName, givenName: firstName, nationality: country }, Constructors: [{ constructorId: cId, name: cName }] } of DriverStandings) {
        driverStand.push(
            createDriverData(dId, firstName, lastName, country, number, pos, pts, win, cId, cName)
        )
    }
    return driverStand;
}
