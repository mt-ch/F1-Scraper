import React, { Component } from 'react'
import { Card, CardContent, styled } from '@material-ui/core'
import './css/driverCard.scss'

const MyCard = styled(Card)({
    background: '#00000032',
    borderStyle: 'solid',
    borderWidth: 'medium',
    borderColor: '#0000004B'
});

function createDriverInfo(id, first_Name, last_Name, nationality_, date, number, pos, pts, wins, cId, cName){
    return{id, first_Name, last_Name, nationality_, date , number, pos, pts, wins, cId, cName};
}

let driverInfo = [];

async function getDriverInfo(){
    const url = "http://ergast.com/api/f1/current/driverStandings.json";
    const response = await fetch(url);
    const data = await response.json();
    const { MRData: { StandingsTable: { StandingsLists: [list]} } } = data;
    const { season, round, DriverStandings } = list;

    for (const {position: pos, points: pts, wins: win, Driver: {driverId: dId, permanentNumber: number, familyName: lastName, givenName: firstName, nationality: country}, Constructors: [{constructorId: cId, name: cName }]} of DriverStandings){
        driverInfo.push(
            createDriverInfo(dId, firstName, lastName, country, number, pos, pts, win, cId, cName)
        )
    }
    return driverInfo
}

export class driversCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          dInfo: [],
        };
      }

    componentDidMount(){
        getDriverInfo()
        .then(data => this.setState({ dInfo: data }))
    }

    render() {
        const {dInfo} = this.state;
        return (
            <div id="card">
                <MyCard>
                    <div id="bg">
                        <CardContent>
                            <h2><strong>Drivers</strong></h2>
                            {dInfo.map(data => 
                            (   
                                <div id="driverInfo" >
                                    <h3>{data.first_Name} {data.last_Name}</h3>
                                    <h4>{data.number}</h4>
                                    <section id="info">
                                        <p>{data.cName}</p>
                                    </section>
                                    <img id='icon' src={require(`../../assets/teams/${data.cId}.png`)}/>
                                    <img id='flag' src={require(`../../assets/flags/${data.nationality_}.png`)}/>
                                    <img id='icon' src={require(`../../assets/drivers/${data.id}.png`)}/>
                                </div>
                            ))}
                        </CardContent>
                    </div>
                </MyCard>
            </div>    
        )   
    }
}

export default driversCard
