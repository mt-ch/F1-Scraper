import React, { Component } from 'react'
import { Card, CardContent, styled } from '@material-ui/core'
import './css/driverCard.scss'
import alb from '../../assets/drivers/alb.png'
import bot from '../../assets/drivers/bot.png'
import gas from '../../assets/drivers/gas.png'
import gio from '../../assets/drivers/gio.png'
import ham from '../../assets/drivers/ham.png'
import kimi from '../../assets/drivers/kimi.png'
import kyv from '../../assets/drivers/kyv.png'
import lec from '../../assets/drivers/lec.png'
import ocon from '../../assets/drivers/oco.png'
import ric from '../../assets/drivers/ric.png'
import ver from '../../assets/drivers/ver.png'
import vet from '../../assets/drivers/vet.png'

const MyCard = styled(Card)({
    background: '#00000032',
    borderStyle: 'solid',
    borderWidth: 'medium',
    borderColor: '#0000004B'
});

function createDriverInfo(first_Name, last_Name, nationality_, date, url_){
    return{first_Name, last_Name, nationality_, date, url_};
}

let driverInfo = [];

async function getDriverInfo(){
    const url = "http://ergast.com/api/f1/2020/drivers.json";
    const response = await fetch(url);
    const data = await response.json();
    const { MRData: { DriverTable:  { season, Drivers}  } } = data;
    
    console.table(Drivers);
    for (const {driverId: id, permanentNumber: number, code: code, url: link, givenName: firstName, familyName: lastName, dateOfBirth: dob, nationality: nation} of Drivers){
        driverInfo.push(
            createDriverInfo(firstName, lastName, nation, dob, link)
        )
    }
    console.table(driverInfo)
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
        const { dInfo } = this.state;
        return (
            <div id="card">
                <MyCard>
                    <div id="bg">
                        <CardContent>
                            <h2><strong>Drivers</strong></h2>
                            {dInfo.map(data => (
                                <div id="info">
                                    <h5>{data.first_Name} {data.last_Name}</h5>
                                    <p>{data.nationality_}</p>
                                    <p>{data.date}</p>
                                </div>
                            ))}
                            <img id='icon' src={alb}/>
                            <img id='icon' src={bot}/>
                            <img id='icon' src={gas}/>
                            <img id='icon' src={gio}/>
                            <img id='icon' src={ham}/>
                            <img id='icon' src={kimi}/>
                            <img id='icon' src={kyv}/>
                            <img id='icon' src={lec}/>
                            <img id='icon' src={ocon}/>
                            <img id='icon' src={ric}/>
                            <img id='icon' src={ver}/>
                            <img id='icon' src={vet}/>
                            
                        </CardContent>
                    </div>
                </MyCard>
            </div>    
        )   
    }
}

export default driversCard
