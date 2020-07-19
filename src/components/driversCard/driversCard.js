import React, { Component } from 'react'
import { Card, CardContent, styled } from '@material-ui/core'
import './css/driverCard.scss'

const MyCard = styled(Card)({
    background: '#00000032',
    borderStyle: 'solid',
    borderWidth: 'medium',
    borderColor: '#0000004B'
});

function createDriverInfo(id, first_Name, last_Name, nationality_, date, url_, number){
    return{id, first_Name, last_Name, nationality_, date, url_, number};
}

let driverInfo = [];

async function getDriverInfo(){
    const url = "http://ergast.com/api/f1/2020/drivers.json";
    const response = await fetch(url);
    const data = await response.json();
    const { MRData: { DriverTable:  { season, Drivers}  } } = data;

    console.table(Drivers);
    for (const {driverId: id, permanentNumber: number, url: link, givenName: firstName, familyName: lastName, dateOfBirth: dob, nationality: nation} of Drivers){
        driverInfo.push(
            createDriverInfo(id, firstName, lastName, nation, dob, link, number)
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
                                <div id="driverInfo">
                                    <h5>{data.first_Name} {data.last_Name}</h5>
                                    <p>{data.nationality_}</p>
                                    <p>{data.number}</p>
                                    <img id='icon' src={require(`../../assets/flags/${data.nationality_}.png`)}/>
                                    <p>{data.date}</p>
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
