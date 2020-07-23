import React, { Component } from 'react'
import {
    Card, CardContent, styled, Button,
    ButtonGroup, withStyles
} from '@material-ui/core';
import './css/standings.scss';

const MyCard = styled(Card)({
    background: '#574f7d85',
    borderStyle: 'solid',
    borderWidth: 'medium',
    borderColor: '#0000004B',
    borderRadius: '1em'
});

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

function createDriverData(dId, firstName, lastName, nationality, number, pos, pts, wins, cId, cName) {
    return { dId, firstName, lastName, nationality, number, pos, pts, wins, cId, cName };
}

function createDataConstructors(cId, pos, constructor, pts, wins) {
    return { cId, pos, constructor, pts, wins };
}

let driverStand = [];
let constructorStand = [];

async function getDriverStandings() {
    const url = "http://ergast.com/api/f1/current/driverStandings.json";
    const response = await fetch(url);
    const data = await response.json();
    const { MRData: { StandingsTable: { StandingsLists: [list] } } } = data;
    const { season, round, DriverStandings } = list;

    for (const { position: pos, points: pts, wins: win, Driver: { driverId: dId, permanentNumber: number, familyName: lastName, givenName: firstName, nationality: country }, Constructors: [{ constructorId: cId, name: cName }] } of DriverStandings) {
        driverStand.push(
            createDriverData(dId, firstName, lastName, country, number, pos, pts, win, cId, cName)
        )
    }
    return driverStand;
}

async function getConstructorStandings() {
    const url = "http://ergast.com/api/f1/current/constructorStandings.json";
    const response = await fetch(url);
    const data = await response.json();
    const { MRData: { StandingsTable: { StandingsLists: [list] } } } = data;
    const { season, round, ConstructorStandings } = list;

    for (const { position: pos, positionText: posTxt, points: pts, wins: win, Constructor: { constructorId: cId, name: teamName, } } of ConstructorStandings) {
        constructorStand.push(
            createDataConstructors(cId, pos, teamName, pts, win)
        )
    }
    return constructorStand;
}

export class standingsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dStandings: [],
            cStandings: [],
            isLoading: false,
            driver: true,
            constructor: false,
        };
    }

    handleDriver = () => {
        this.setState({
            driver: true,
            constructor: false
        })
    }

    handleConstructor = () => {
        this.setState({
            driver: false,
            constructor: true
        })
    }

    componentDidMount() {
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
        if (driver) {
            return (
                <div id="card">
                    <MyCard>
                        <div id="bg">
                            <CardContent>
                                <section id="header">
                                    <h1 id="title"><strong>Standings</strong></h1>
                                    <ButtonGroup id="button">
                                        <StyledButton size="small" onClick={this.handleDriver}>Driver</StyledButton>
                                        <StyledButton size="small" onClick={this.handleConstructor}>Team</StyledButton>
                                    </ButtonGroup>
                                </section>
                                {dStandings.map(data =>
                                    (
                                        <div id="driverInfo" >
                                            <section id="pos">
                                                <h1><strong>{data.pos}</strong></h1>
                                            </section>
                                            <section id="name">
                                                <p><strong>{data.firstName} {data.lastName}</strong></p>
                                                <p>{data.cName}</p>
                                            </section>
                                            <img id="flag"src={require(`../../assets/flags/${data.nationality}.png`)}/>
                                            <section id="number">
                                                {/* <h4>{data.number}</h4> */}
                                            </section>
                                            <section id="points">
                                                <h3><strong>{data.pts} Pts</strong></h3>
                                            </section>
                                            <div id="driver">
                                                <img id='icon' src={require(`../../assets/drivers/${data.dId}.png`)} />
                                            </div>
                                        </div>
                                    ))}
                            </CardContent>
                        </div>
                    </MyCard>
                </div>
            )
        }
        if (constructor) {
            return (
                <div id="card">
                    <MyCard>
                        <div id="bg">
                            <CardContent>
                                <section id="header">
                                    <h1 id="title">Standings</h1>
                                    <ButtonGroup id="button">
                                        <StyledButton size="small" onClick={this.handleDriver}>Driver</StyledButton>
                                        <StyledButton size="small" onClick={this.handleConstructor}>Team</StyledButton>
                                    </ButtonGroup>
                                </section>
                                <div>
                                {cStandings.map(data =>
                                    (
                                    <div id="driverInfo">
                                        <section id="pos">
                                            <h1><strong>{data.pos}</strong></h1>
                                        </section>
                                        <section id="name">
                                            <p><strong>{data.constructor}</strong></p>
                                        </section>
                                        <section id="points">
                                            <h3><strong>{data.pts} Pts</strong></h3>
                                        </section>
                                        <section id="driver">
                                            <img id='icon' src={require(`../../assets/teams/${data.cId}.png`)} />
                                        </section>
                                    </div>
                                ))}
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

