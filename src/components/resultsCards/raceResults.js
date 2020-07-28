import React, { Component } from 'react'
import { withStyles, Button, ButtonGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core'
import GetRaceData from '../../utils/getRaceData';
import GetQualData from '../../utils/getQualData';
import QualTable from './qualTable';
import RaceTable from './raceTable';
import './css/resultsCard.scss';

const StyledButton = withStyles({
    root: {
      background: '#00000085',
      border: 0,
      color: '#f5f5f5',
      padding: '0 1em 0 1em',
      border: 0,
      borderRadius: '2em',
      boxShadow: '0 3px 5px 2px rgba(6, 6, 6, .2)'
    },
    label: {
      textTransform: 'capitalize',
      margin: 0,
      fontFamily: 'Orbitron',
      fontSize: '0.8em'
    },
})(Button);

export class raceResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            raceResults: [],
            qualResults: [],
            isLoading: false,
            qual: true,
            race: false
        };
    }

    componentDidMount(){
        this.setState({ isLoading: true });
        GetRaceData(this.props.round)
            .then(data => this.setState({ raceResults: data, isLoading: false }));
        GetQualData(this.props.round)
            .then(data => this.setState({ qualResults: data, isLoading: false}));
    }

    handleQual = () => {
        this.setState({
            qual: true,
            race: false
        })
    }

    handleRace = () => {
        this.setState({
            qual: false,
            race: true
        })
    }

    render() {
        const {raceResults, qualResults, isLoading, race, qual} = this.state;
        if (isLoading) {
            return <p>Loading ...</p>;
        }
        if (race){
            return(
                <div>
                    <section id="header">
                        <h1>Race</h1>
                        <ButtonGroup id="button">
                            <StyledButton size="small" onClick={this.handleQual} >Qual</StyledButton>
                            <StyledButton size="small" onClick={this.handleRace} >Race</StyledButton>
                        </ButtonGroup>
                    </section>
                    {/* {raceResults.map(data => (
                        <div id="resultsContainer">
                            <h1>{data.pos}</h1>
                            <h3>{data.firstName.slice(0, 1)}.{data.lastName}</h3>
                            <h1>{data.points} Pts</h1>
                        </div>
                    ))} */}
                    <RaceTable data={raceResults}/>
                </div>
            )
        }
        if (qual){
            return(
                <div>
                    <section id="header">
                        <h1>Qualifying</h1>
                        <ButtonGroup id="button">
                            <StyledButton size="small" onClick={this.handleQual} >Qual</StyledButton>
                            <StyledButton size="small" onClick={this.handleRace} >Race</StyledButton>
                        </ButtonGroup>
                    </section>
                    {/* <TableContainer>
                        <Table size="small">
                            <TableHead>
                            <TableRow>
                                <TableCell align="left">Pos</TableCell>
                                <TableCell align="left">Driver</TableCell>
                                <TableCell align="left">Q1</TableCell>
                                <TableCell align="left">Q2</TableCell>
                                <TableCell align="left">Q3</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {qualResults.map((data) => (
                                <TableRow key={data.pos}>
                                <TableCell component="th" scope="row">
                                    {data.pos}
                                </TableCell>
                                <TableCell align="left">{data.firstName.slice(0, 1)}.{data.lastName}</TableCell>
                                <TableCell align="left">{data.q1}</TableCell>
                                <TableCell align="left">{data.q2}</TableCell>
                                <TableCell align="left">{data.q3}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer> */}
                    <QualTable data={qualResults}/>
                </div>
            )
        }
    }
}

export default raceResults
