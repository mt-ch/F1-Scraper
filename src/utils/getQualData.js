function createQualData(pos, firstName, lastName, q1, q2, q3) {
    return { pos, firstName, lastName, q1, q2, q3 };
}

export default async function getQualData(raceNumber){
    let qualResult = [];
    const url = "http://ergast.com/api/f1/2020/"+raceNumber+"/qualifying.json";
    const response = await fetch(url);
    const data = await response.json();
    const { MRData: { RaceTable: { Races: [list] } } } = data;
    const { QualifyingResults } = list;
    for (const { position: pos, Driver: { familyName: lastName, givenName: firstName }, Q1: q1, Q2: q2, Q3: q3 } of QualifyingResults) {
        qualResult.push(
            createQualData(pos, firstName, lastName, q1, q2, q3)
        )
    }
    return qualResult;
}