import React, { Component } from 'react'
import { Card, CardContent, styled, Button, 
         ButtonGroup, Table, TableBody, TableCell, TableContainer,
         TableHead, TableRow, TableFooter, TablePagination} from '@material-ui/core';
import './css/standings.scss';

const MyCard = styled(Card)({
    background: '#00000032',
    borderStyle: 'solid',
    borderWidth: 'medium',
    borderColor: '#0000004B',
});

const MyButton = styled(Button)({
    backgroundColor: '#FFFFFF32',
    '&:active': {
        boxShadow: 'none',
        backgroundColor: 'white',
        borderColor: '#005cbf',
    },
    '&:hover': {
        backgroundColor: '#FFFFFF5A',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
})

const TbHeader = styled(TableHead)({
    color: '#000000',
})

const TbCell = styled(TableCell)({
    color: '#f5f5f5',
    maxWidth: 50
})

function createDriverData(dId, firstName, lastName, nationality, number, pos, pts, wins, cId, cName){
    return {dId, firstName, lastName, nationality, number, pos, pts, wins, cId, cName};
}

function createDataConstructors(id, rank, constructor, points, wins){
    return {id, rank, constructor, points, wins};
}

let driverStand = [];
let constructorStand = [];

async function getDriverStandings(){
    const url = "http://ergast.com/api/f1/current/driverStandings.json";
    const response = await fetch(url);
    const data = await response.json();
    const { MRData: { StandingsTable: { StandingsLists: [list]} } } = data;
    const { season, round, DriverStandings } = list;

    for (const {position: pos, points: pts, wins: win, Driver: {driverId: dId, permanentNumber: number, familyName: lastName, givenName: firstName, nationality: country}, Constructors: [{constructorId: cId, name: cName }] } of DriverStandings){
        driverStand.push(
            createDriverData(dId, firstName, lastName, country, number, pos, pts, win, cId, cName)
        )
    }
    return driverStand;
}

async function getConstructorStandings(){
    const url = "http://ergast.com/api/f1/current/constructorStandings.json";
    const response = await fetch(url);
    const data = await response.json();
    const { MRData: { StandingsTable: { StandingsLists: [list]} } } = data;
    const { season, round, ConstructorStandings } = list;

    for (const {position: pos, positionText: posTxt, points: pts, wins: win, Constructor: {constructorId: cId, name: teamName,} } of ConstructorStandings){
        constructorStand.push(
            createDataConstructors(cId, pos, teamName, pts, win)
        )
    }
    return constructorStand;
}

 function sliceName(name){
    var str = name;
    var res = str.slice(0, 1);
    return res;
 }


export class standingsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          dStandings: [],
          cStandings: [],
          isLoading: false,
          driver: true,
          constructor: false  
        };
      }

      handleDriver = ()=>{
        this.isContained = "contained";
        this.isOutline = "outlined";
         this.setState({
            driver: true,
            constructor: false
         })
     }

     handleConstructor = ()=>{
        this.isContained = "contained";
        this.isOutline = "outlined";
         this.setState({
            driver: false,
            constructor: true
         })
     }

    componentDidMount(){
        this.setState({ isLoading: true });
        getDriverStandings()
        .then(data => this.setState({ dStandings: data, isLoading: false }));

        getConstructorStandings()
        .then(data => this.setState({ cStandings: data, isLoading: false }));
    }
    
    render() {
        const { dStandings, cStandings, isLoading, driver, constructor } = this.state;


        if (isLoading) {
            return <p>Loading ...</p>;
          }
        if (driver){
            return(
                <div id="card">
                <MyCard>
                    <div id="bg">
                        <CardContent>
                                <h2 id="title"><strong>Standings</strong></h2>
                                {/* <ButtonGroup id="button">
                                    <MyButton onClick={this.handleDriver}>Driver</MyButton>
                                    <MyButton onClick={this.handleConstructor}>Constructor</MyButton>
                                </ButtonGroup> */}
                                {dStandings.map(data => 
                                (   
                                <div id="driverInfo" >
                                    <section id="pos">
                                        <h2>{data.pos}</h2>
                                    </section>
                                    <section id="name">
                                        <h3>{data.firstName} {data.lastName}</h3>
                                    </section>
                                    <div id="flag">
                                        {/* <img id="flag"src={require(`../../assets/flags/${data.nationality}.png`)}/> */}
                                    </div>
                                    <section id="number">
                                        <h4>{data.number}</h4>
                                    </section>
                                    <section id="points">
                                        <p><strong>{data.pts} Pts</strong></p>
                                    </section>
                                    <section id="teamName">
                                        <p>{data.cName}</p>
                                    </section>
                                    <section id="driver">
                                        <img id='icon' src={require(`../../assets/drivers/${data.dId}.png`)}/>  
                                    </section>
                                    <section id="teamLogo">
                                        {/* <img id='icon' src={require(`../../assets/teams/${data.cId}.png`)}/> */}
                                        <div id="teamColor"></div>
                                    </section>
                                </div>
                                ))}
                        </CardContent>
                    </div>
                </MyCard>
            </div>    
            )
        }
        if (constructor){
            return(
                <div id="card">
                    <MyCard>
                        <div id="bg">
                            <CardContent>
                                    <h2 id="title"><strong>Standings</strong></h2>
                                    <ButtonGroup id="button">
                                        <MyButton onClick={this.handleDriver}>Driver</MyButton>
                                        <MyButton onClick={this.handleConstructor}>Constructor</MyButton>
                                    </ButtonGroup>
                                    <div>
                                        <TableContainer>
                                            <Table>
                                                <TableHead>
                                                    <TableRow>
                                                        <TbCell align="right">Rank</TbCell>
                                                        <TbCell align="left">Constructor</TbCell>
                                                        <TbCell align="left"></TbCell>
                                                        <TbCell align="right">Points</TbCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {cStandings.map((row) => (
                                                        <TableRow key={row.rank}>
                                                            <TbCell>{row.rank}</TbCell>
                                                            <TbCell align="left"><span id="teamName"><p>{row.constructor}</p></span></TbCell>
                                                            <TbCell><img id="teamLogo" src={require(`../../assets/teams/${row.id}.png`)}/></TbCell>
                                                            <TbCell align="right">{row.points}</TbCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </div> 
                            </CardContent>
                        </div>
                    </MyCard>
                </div>
            )
        }
    }
}

export default standingsCard

