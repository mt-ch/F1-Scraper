import React, { Component } from 'react'
import { Card, CardContent, styled, Button, 
         ButtonGroup, Table, TableBody, TableCell, TableContainer,
         TableHead, TableRow, TableFooter, TablePagination} from '@material-ui/core';
import './css/standings.scss';
import axios from 'axios';

const MyCard = styled(Card)({
    background: '#00000032',
    borderStyle: 'solid',
    borderWidth: 'medium',
    borderColor: '#0000004B'
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
})

function createDriverData(rank, country, firstName, driver, points, wins){
    return {rank, country, firstName, driver, points, wins};
}

function createDataConstructors(rank, constructor, points, wins){
    return {rank, constructor, points, wins};
}

let driverStand = [];
let constructorStand = [];

async function getDriverStandings(){
    const url = "http://ergast.com/api/f1/current/driverStandings.json";
    const response = await fetch(url);
    const data = await response.json();
    const { MRData: { StandingsTable: { StandingsLists: [list]} } } = data;
    const { season, round, DriverStandings } = list;

    for (const {position: pos, points: pts, wins: win, Driver: {familyName: lastName, givenName: firstName, nationality: country} } of DriverStandings){
        driverStand.push(
            createDriverData(pos, country, firstName, lastName, pts, win)
        )
    }
    console.table(driverStand)
    return driverStand;
}

async function getConstructorStandings(){
    const url = "http://ergast.com/api/f1/current/constructorStandings.json";
    const response = await fetch(url);
    const data = await response.json();
    const { MRData: { StandingsTable: { StandingsLists: [list]} } } = data;
    const { season, round, ConstructorStandings } = list;

    for (const {position: pos, positionText: posTxt, points: pts, wins: win, Constructor: {name: teamName,} } of ConstructorStandings){
        constructorStand.push(
            createDataConstructors(pos, teamName, pts, win)
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
       // .then(data => console.log(data))
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
                                <h2 id="title">2020 Standings</h2>
                                <ButtonGroup id="button">
                                    <MyButton onClick={this.handleDriver}>Driver</MyButton>
                                    <MyButton onClick={this.handleConstructor}>Constructor</MyButton>
                                </ButtonGroup>
                                <TableContainer>
                                    <Table size="small">
                                        <TbHeader>
                                            <TableRow>
                                                <TbCell align="right">Pos</TbCell>
                                                <TbCell align="right">Driver</TbCell>
                                                <TbCell align="right">Points</TbCell>
                                            </TableRow>
                                        </TbHeader>
                                        <TableBody>
                                            {dStandings.map(row => (
                                                <TableRow key={row.rank}>
                                                    <TbCell>{row.rank}</TbCell>
                                                    <TbCell align="right">{sliceName(row.firstName)}.{row.driver}</TbCell>
                                                    <TbCell align="right">{row.points}</TbCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
               
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
                                    <h2 id="title">2020 Standings</h2>
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
                                                        <TbCell align="right">Constructor</TbCell>
                                                        <TbCell align="right">Points</TbCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {cStandings.map((row) => (
                                                        <TableRow key={row.rank}>
                                                            <TbCell>{row.rank}</TbCell>
                                                            <TbCell align="right">{row.constructor}</TbCell>
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

