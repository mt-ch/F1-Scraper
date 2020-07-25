import React, { Component } from 'react'
import { Card, CardContent, styled, withStyles, Button, ButtonGroup} from '@material-ui/core'
import RaceResults from './raceResults'
import '../../css/App.scss'
import getQualData from '../../utils/getQualData'
import getRaceData from '../../utils/getRaceData'
import getSchedule from '../../utils/getSchedule'
import RaceTab from './raceTab'

const MyCard = styled(Card)({
    background: '#574f7d85',
    borderStyle: 'solid',
    borderWidth: 'medium',
    borderColor: '#0000004B',
    borderRadius: '1em'
})

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

const handleChange = (event) => {
    return true;
  };

export class resultsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            raceResults: [],
            schedule: [],
            isLoading: false,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        // getQualData();
        // getRaceData()
        //     .then(data => this.setState({ raceResults: data, isLoading: false }));
        getSchedule()
            .then(data => this.setState({ schedule: data, isLoading: false}))
    }

    

    render() {
        const {raceResults, schedule, isLoading} = this.state;
        if (isLoading) {
            return <p>Loading ...</p>;
        }
        else
        return (
            <div id="card">
                <MyCard>
                    <div id="bg">
                        <CardContent>
                                <section id="header">
                                    <h1 id="title"><strong>Results</strong></h1>
                                    <ButtonGroup id="button">
                                        <StyledButton size="small" >Qual</StyledButton>
                                        <StyledButton size="small" >Race</StyledButton>
                                    </ButtonGroup>
                                </section>
                                {/* <ButtonGroup id="button">
                                {schedule.map(raceInfo => (
                                    
                                    <StyledButton size="small" >{raceInfo.name}</StyledButton>
                                    
                                
                                ))}
                                </ButtonGroup> */}
                                
                                <section id="results">
                                    <RaceTab/>
                                    
                              
                                    
                                </section>
                        </CardContent>
                    </div>
                </MyCard>
            </div>
        )
    }
}

export default resultsCard
