import React, { Component } from 'react'
import { Card, CardContent, styled, Button, ButtonGroup, withStyles } from '@material-ui/core';
import ReactLoading from 'react-loading';
import GetDriverStandings from '../../utils/getDriverStandings';
import GetConstructorStandings from '../../utils/getConstructorStandings';
import DriverStandings from './driverStandings';
import ConstructorStandings from './constructorStandings';
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
        GetDriverStandings()
            .then(data => this.setState({ dStandings: data, isLoading: false }));

        GetConstructorStandings()
            .then(data => this.setState({ cStandings: data, isLoading: false }));
    }

    render() {
        const { dStandings, cStandings, isLoading, driver, constructor } = this.state;
        if (isLoading) {
            return(
            <div id="card">
                <MyCard>
                    <div id="bg">                   
                        <ReactLoading type={"spinningBubbles"} color={'white'} height={'20%'} width={'20%'}/>
                    </div>    
                </MyCard>            
            </div>
            )
        }
        if (driver) {
            return (
                <div id="card">
                    <MyCard>
                        <div id="bg"></div>
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
                                        <DriverStandings data={data}/>
                                    ))}
                            </CardContent>
                    </MyCard>
                </div>
            )
        }
        if (constructor) {
            return (
                <div id="card">
                    <MyCard>
                        <div id="bg"></div>
                            <CardContent>
                                <section id="header">
                                    <h1 id="title">Standings</h1>
                                    <ButtonGroup id="button">
                                        <StyledButton size="small" onClick={this.handleDriver}>Driver</StyledButton>
                                        <StyledButton size="small" onClick={this.handleConstructor}>Team</StyledButton>
                                    </ButtonGroup>
                                </section>
                                {cStandings.map(data =>
                                    (
                                    <ConstructorStandings data={data}/>
                                ))}
                            </CardContent>
                    </MyCard>
                </div>
            )
        }
    }
}

export default standingsCard

