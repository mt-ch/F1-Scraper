import React from 'react';
import './css/App.scss';

//components
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
        {/* <ScheduleCard/> */}
      </section>
      <section className="standings">
        {/* <StandingsCard/> */}
      </section>
      <section className="results">
        <ResultsCard/> 
      </section>
    </div>
  );
}

export default App;
