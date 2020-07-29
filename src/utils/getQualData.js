function createQualData(pos, name, q1, q2, q3) {
    return { pos, name, q1, q2, q3 };
}

export default async function getQualData(raceNumber){
    let qualResult = [];
    let noResult = true;
    const url = "http://ergast.com/api/f1/2020/"+raceNumber+"/qualifying.json";
    const response = await fetch(url);
    const data = await response.json();
    const { MRData: { RaceTable: { Races: [list  = 'n/a'] } } } = data;
    const { QualifyingResults = 'n/a' } = list;
    if(QualifyingResults != 'n/a'){
        for (const { position: pos, Driver: { familyName: lastName, givenName: firstName }, Q1: q1, Q2: q2 = 'n/a', Q3: q3 = 'n/a'} of QualifyingResults) {
            const name = firstName.slice(0, 1)+'.'+lastName;
            qualResult.push(
                createQualData(pos, name, q1, q2, q3)
            )
        }
        return qualResult;
    }
    else{
        return noResult;
    }
}