import React from 'react';
import './App.scss';

//import components
import NavBar from './components/nav/navBar';
import ScheduleCard from './components/scheduleCard/scheduleCard';
import StandingsCard from './components/standingsCard/standingsCard';
import ResultsCard from './components/resultsCards/resultsCard';

function App() {
  return (
    <div className="grid-container">
      <header>
        <NavBar/>
      </header>
      <section className="schedule">
        <ScheduleCard/>
      </section>
      <section className="standings">
        <StandingsCard/>
      </section>
      <section className="results">
        {/* <ResultsCard/>  */}
      </section>
      <section className="drivers">
        {/* <DriversCard/> */}
      </section>
      
    </div>
  );
}

export default App;
