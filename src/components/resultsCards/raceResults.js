import React, { Component } from 'react'
import { withStyles, Button, ButtonGroup} from '@material-ui/core'

import GetRaceData from '../../utils/getRaceData';
import GetQualData from '../../utils/getQualData';

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
                    <h1 id="title"><strong>Results</strong></h1>
                    <ButtonGroup id="button">
                        <StyledButton size="small" onClick={this.handleQual} >Qual</StyledButton>
                        <StyledButton size="small" onClick={this.handleRace} >Race</StyledButton>
                    </ButtonGroup>
                </section>
                    <h1>Race Results</h1>
                    {raceResults.map(data => (
                        <div id="resultsContainer">
                            <h1>{data.pos}</h1>
                            <h3>{data.firstName.slice(0, 1)}.{data.lastName}</h3>
                            <h1>{data.points} Pts</h1>
                        </div>
                    ))}
                </div>
            )
        }
        if (qual){
            return(
                <div>
                <section id="header">
                    <h1 id="title"><strong>Results</strong></h1>
                    <ButtonGroup id="button">
                        <StyledButton size="small" onClick={this.handleQual} >Qual</StyledButton>
                        <StyledButton size="small" onClick={this.handleRace} >Race</StyledButton>
                    </ButtonGroup>
                </section>
                    <h1>Qual Results</h1>
                    {qualResults.map(data => (
                        <div id="resultsContainer">
                            <h1>{data.pos}</h1>
                            <h3>{data.firstName.slice(0, 1)}.{data.lastName}</h3>
                            <h3>Q1: {data.q1}</h3>
                            <h3>Q2: {data.q2}</h3>
                            <h3>Q3: {data.q3}</h3>
                        </div>
                    ))}
                </div>
            )
        }
    }
}

export default raceResults
