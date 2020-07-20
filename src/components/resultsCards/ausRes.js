import React, { Component } from 'react'
import { Button, ButtonGroup, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, styled, Box } from '@material-ui/core';
import './css/resultsCard.scss';

function createRaceData(pos, firstName, lastName, points, time_) {
    return { pos, firstName, lastName, points, time_ };
}

function createQualData(pos, firstName, lastName, q1, q2, q3) {
    return { pos, firstName, lastName, q1, q2, q3 };
}

const MyTableContainer = styled(TableContainer)({
    backgroundColor: '#FFFFFF00'
})

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

const TbCell = styled(TableCell)({
    color: '#f5f5f5',
    maxWidth: 50
})

let resultQual = [];
let resultRace = [];

async function getRaceData() {
    const url = "http://ergast.com/api/f1/2020/1/results.json";
    const response = await fetch(url);
    const data = await response.json();
    const { MRData: { RaceTable: { Races: [list] } } } = data;
    const { Results } = list;

    for (const { position: pos, points: pts, Driver: { familyName: lastName, givenName: firstName }, Constructor: { name: cName } } of Results) {
        resultRace.push(
            createRaceData(pos, firstName, lastName, pts, cName)
        )
    }
    return resultRace;
}

async function getQualData() {
    const url = "http://ergast.com/api/f1/2020/1/qualifying.json";
    const response = await fetch(url);
    const data = await response.json();
    const { MRData: { RaceTable: { Races: [list] } } } = data;
    const { QualifyingResults } = list;
    console.log(QualifyingResults)
    for (const { position: pos, Driver: { familyName: lastName, givenName: firstName }, Constructor: { name: cName }, Q1: q1, Q2: q2, Q3: q3 } of QualifyingResults) {
        resultQual.push(
            createQualData(pos, firstName, lastName, q1, q2, q3)
        )
    }
    console.table(resultQual)
    return resultQual;
}

function sliceName(name) {
    var str = name;
    var res = str.slice(0, 1);
    return res;
}

export class ausRes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            raceR: [],
            qualR: [],
            isLoading: false,
            qual: true,
            race: false  
        };
    }

    handleQual = ()=>{
        this.isContained = "contained";
        this.isOutline = "outlined";
         this.setState({
            qual: true,
            race: false
         })
     }

     handleRace = ()=>{
        this.isContained = "contained";
        this.isOutline = "outlined";
         this.setState({
            qual: false,
            race: true
         })
     }

    componentWillMount() {
        this.setState({ isLoading: true });
        getRaceData()
            .then(data => this.setState({ raceR: data, isLoading: false }));
        getQualData()
            .then(data => this.setState({ qualR: data, isLoading: false }));
    }

    render() {
        const { raceR, qualR, isLoading, qual, race } = this.state;

        if (isLoading) {
            return <p>Loading ...</p>;
        }
        if (race){
            return(
                <div>
                    <ButtonGroup>
                        <MyButton onClick={this.handleQual} variant={this.isContained}>Qualifying</MyButton>
                        <MyButton onClick={this.handleRace} variant={this.isOutline}>Race</MyButton>
                    </ButtonGroup>
                    <MyTableContainer>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TbCell align="left">Pos</TbCell>
                                    <TbCell align="left">Driver</TbCell>
                                    <TbCell align="left">Pts</TbCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {raceR.map((row) => (
                                    <TableRow key={row.pos}>
                                        <TbCell align="left">{row.pos}</TbCell>
                                        <TbCell align="left">{sliceName(row.firstName)}.{row.lastName}</TbCell>
                                        <TbCell align="left">{row.points}</TbCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </MyTableContainer>
                </div>
            )
        }
        if (qual){
            return(
                <div>
                    <ButtonGroup>
                        <MyButton onClick={this.handleQual} variant={this.isContained}>Qualifying</MyButton>
                        <MyButton onClick={this.handleRace} variant={this.isOutline}>Race</MyButton>
                    </ButtonGroup>
                    <MyTableContainer>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TbCell align="right">Pos</TbCell>
                                    <TbCell align="right">Driver</TbCell>
                                    <TbCell align="right">Q1</TbCell>
                                    <TbCell align="right">Q2</TbCell>
                                    <TbCell align="right">Q3</TbCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {qualR.map((row) => (
                                    <TableRow key={row.pos}>
                                        <TbCell>{row.pos}</TbCell>
                                        <TbCell align="right">{sliceName(row.firstName)}.{row.lastName}</TbCell>
                                        <TbCell align="right">{row.q1}</TbCell>
                                        <TbCell align="right">{row.q2}</TbCell>
                                        <TbCell align="right">{row.q3}</TbCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </MyTableContainer> 
                </div>    
            )
        }
    }
}

export default ausRes
