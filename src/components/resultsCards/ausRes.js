import React, { Component } from 'react'
import { Button, ButtonGroup, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, styled, Box } from '@material-ui/core';
import './css/resultsCard.scss';

function createRaceData(pos, firstName, lastName, points){
    return {pos, firstName, lastName, points};
}

function createQual(pos, driver, q1, q2, q3){
    return {pos, driver, q1, q2, q3};
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

let resultRace = [];

async function getRaceData(){
    const url = "http://ergast.com/api/f1/2020/1/results.json";
    const response = await fetch(url);
    const data = await response.json();
    const { MRData: { RaceTable: { Races: [list]} } } = data;
    const { Results } = list;
    console.log(Results);

    for(const {position: pos, points: pts, Driver: {familyName: lastName, givenName: firstName}} of Results){
        resultRace.push(
            createRaceData(pos, firstName, lastName, pts)
        )
    }
    return resultRace;
}

export class ausRes extends Component {
     constructor(props) {
        super(props);
        this.state = {
          rStandings: [],
        };
      }
   


    componentWillMount(){
        getRaceData()
        .then(data => this.setState({ rStandings: data }));
    }

    render() {
        const { rStandings } = this.state;
        return (
                <div>
               
                        <ButtonGroup>
                            <MyButton onClick={this.handleShow} variant={this.isContained}>Qualifying</MyButton>
                            <MyButton onClick={this.handleHide} variant={this.isOutline}>Race</MyButton>
                        </ButtonGroup>
                   
                    
                            <MyTableContainer>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="right">Pos</TableCell>
                                            <TableCell align="right">Driver</TableCell>
                                            <TableCell align="right">Pts</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rStandings.map((row) => (
                                            <TableRow key={row.pos}>
                                                <TableCell>{row.pos}</TableCell>
                                                <TableCell align="right">{row.firstName}</TableCell>
                                                <TableCell align="right">{row.points}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </MyTableContainer>
                      
                        
                        
                            {/* <MyTableContainer>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="right">Pos</TableCell>
                                            <TableCell align="right">Driver</TableCell>
                                            <TableCell align="right">Q1</TableCell>
                                            <TableCell align="right">Q2</TableCell>
                                            <TableCell align="right">Q3</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rowsC.map((row) => (
                                            <TableRow key={row.pos}>
                                                <TableCell>{row.pos}</TableCell>
                                                <TableCell align="right">{row.driver}</TableCell>
                                                <TableCell align="right">{row.q1}</TableCell>
                                                <TableCell align="right">{row.q2}</TableCell>
                                                <TableCell align="right">{row.q3}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </MyTableContainer> */}
                   
        
        </div>  
        )
    }
}

export default ausRes
