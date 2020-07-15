import React, { Component } from 'react'
import { Card, CardContent, styled, Button, 
         ButtonGroup, Table, TableBody, TableCell, TableContainer,
         TableHead, TableRow, Paper, Grid, CardMedia} from '@material-ui/core';
import './css/standings.scss';
import British from '../../assets/British.png'
import Axios from 'axios';

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
    
})

const TbCell = styled(TableCell)({

})

const Flag = styled(CardMedia)({

});

function createDriverData(rank, country, firstName, driver, points, wins){
    return {rank, country, firstName, driver, points, wins};
}

function createDataConstructors(rank, contructor, points, wins){
    return {rank, contructor, points, wins};
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
}

function getFlag(nation) {
    let path = "../../assets/"+nation+".png";
    return path;
 }

export class standingsCard extends Component {

    async componentDidMount(){
        Axios.get('/driverStd')
            .then(res => {
                console.log(res.data)
                this.setState({
                    standingsD:  res.data
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div id="stCard">
                <MyCard>
                    <div id="">
                        <CardContent>
                            <h2 id="title">
                                2020 Standings
                            </h2>
                      
                                <TableContainer>
                                    <Table size="small">
                                        <TbHeader>
                                            <TableRow>
                                                <TbCell align="right">Rank</TbCell>
                                                <TbCell align="right">Driver</TbCell>
                                                <TbCell align="right">Points</TbCell>
                                                <TbCell align="right">Wins</TbCell>
                                            </TableRow>
                                        </TbHeader>
                                        <TableBody>
                                            {driverStand.map((row) => (
                                                <TableRow key={row.rank}>
                                                    <TbCell>{row.rank}</TbCell>
                                                    {/* <TbCell>
                                                        <img src={getFlag(row.country)}/>
                                                    </TbCell> */}
                                                    <TbCell align="right">{row.driver}</TbCell>
                                                    <TbCell align="right">{row.points}</TbCell>
                                                    <TbCell align="right">{row.wins}</TbCell>
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
}

export default standingsCard

{/* <div>
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TbCell align="right">Rank</TbCell>
                    <TbCell align="right">Constructor</TbCell>
                    <TbCell align="right">Points</TbCell>
                    <TbCell align="right">Wins</TbCell>  
                </TableRow>
            </TableHead>
            <TableBody>
                {constructorStand.map((row) => (
                    <TableRow key={row.rank}>
                        <TbCell>{row.rank}</TbCell>
                        <TbCell align="right">{row.contructor}</TbCell>
                        <TbCell align="right">{row.points}</TbCell>
                        <TbCell align="right">{row.wins}</TbCell>
                        <TbCell align="right">{row.podiums}</TbCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
</div> */}