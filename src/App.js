import React from 'react';
import './App.css';
//import pages
import NavBar from './components/nav/navBar';
import ScheduleCard from './components/scheduleCard/scheduleCard';
import StandingsCard from './components/standingsCard/standingsCard';
import ResultsCard from './components/resultsCards/resultsCard';
import DriversCard from './components/driversCard/driversCard';
import { Grid } from '@material-ui/core';

function App() {
  return (
      
    <div className="App">
      <NavBar/>
      
        <Grid
          container
          direction="column"
        >
          <Grid
            container
            direction="row">     
            <Grid item xs={12}>
              <ScheduleCard/>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row">
            <Grid item xs={12} >
              <StandingsCard/>
            </Grid>
          </Grid>  
            <Grid 
              container
              direction="row"
            >
              <Grid item xs={12}>
                
              </Grid>
            </Grid>
        </Grid> 

    </div>
  );
}

export default App;
