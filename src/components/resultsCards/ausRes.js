import React, { Component } from 'react'
import { Button, ButtonGroup, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, styled, Box } from '@material-ui/core';

function createData(pos, driver, time, points){
    return {pos, driver, time, points};
}

function createQual(pos, driver, q1, q2, q3){
    return {pos, driver, q1, q2, q3};
}

const rows = [
    createData(1, 'V.Bottas', '1:30:55.739', 25),
    createData(2, 'C.Leclerc', '+2.700s', 18),
    createData(3, 'L.Norris', '+5.491s', 16),
    createData(4, 'L.Hamilton','+5.689s', 12),
    createData(5, 'C.Sainz Jr.','+8.903s', 10),
]

const rowsC = [
    createQual(1, 'V.Bottas', '1:04.111', '1:03.015', '1:02.939	'),
    createQual(2, 'L.Hamilton', '1:04.198', '1:03.096', '1:02.951'),
]

const MyTableContainer = styled(TableContainer)({
    backgroundColor: '#FFFFFF00'
})

const MyBox = styled(Box)({
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

export class ausRes extends Component {

    isContained = "contained";
    isOutline = "outline";

    state = {
        isActive:true,
        isNotActive:false,
     }
   
     handleShow = ()=>{
        this.isContained = "contained";
        this.isOutline = "outlined";
         this.setState({
             isActive: true,
             isNotActive: false,
         })
     }
   
     handleHide = () =>{
        this.isContained = "outlined";
        this.isOutline = "contained";
         this.setState({
             isActive: false,
             isNotActive: true,
         })
     }

    render() {
        return (
            <MyBox>

                    <div className="buttonSelection">
                        <ButtonGroup>
                            <MyButton onClick={this.handleShow} variant={this.isContained}>Qualifying</MyButton>
                            <MyButton onClick={this.handleHide} variant={this.isOutline}>Race</MyButton>
                        </ButtonGroup>
                    </div>
                    {this.state.isNotActive ? <div>
                        <MyTableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="right">Pos</TableCell>
                                        <TableCell align="right">Driver</TableCell>
                                        <TableCell align="right">Time</TableCell>
                                        <TableCell align="right">Pts</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.pos}>
                                            <TableCell>{row.pos}</TableCell>
                                            <TableCell align="right">{row.driver}</TableCell>
                                            <TableCell align="right">{row.time}</TableCell>
                                            <TableCell align="right">{row.points}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </MyTableContainer>
                    </div>: null }
                    
                    {this.state.isActive ? <div>
                        <MyTableContainer>
                            <Table>
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
                        </MyTableContainer>
                    </div>: null }

            </MyBox>
        )
    }
}

export default ausRes
