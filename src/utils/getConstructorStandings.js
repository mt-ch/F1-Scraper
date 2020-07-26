function createDataConstructors(cId, pos, constructor, pts, wins) {
    return { cId, pos, constructor, pts, wins };
}

export default async function getConstructorStandings() {
    let constructorStand = [];
    const url = "http://ergast.com/api/f1/current/constructorStandings.json";
    const response = await fetch(url);
    const data = await response.json();
    const { MRData: { StandingsTable: { StandingsLists: [list] } } } = data;
    const { season, round, ConstructorStandings } = list;

    for (const { position: pos, positionText: posTxt, points: pts, wins: win, Constructor: { constructorId: cId, name: teamName, } } of ConstructorStandings) {
        constructorStand.push(
            createDataConstructors(cId, pos, teamName, pts, win)
        )
    }
    return constructorStand;
}
