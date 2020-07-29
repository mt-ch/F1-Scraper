import React from 'react';
import './css/App.scss';

//components
import NavBar from './components/nav/navBar';
import ScheduleCard from './components/scheduleCard/scheduleCard';
import StandingsCard from './components/standingsCard/standingsCard';
import ResultsCard from './components/resultsCards/resultsCard';

function App() {
  return (
    <div className="main-container">
      <header>
        <NavBar/>
      </header>
      <section id="schedule">
        <ScheduleCard/>
      </section>
      <section id="standings">
        <StandingsCard/>
      </section>
      <section id="results">
        <ResultsCard/> 
      </section>
    </div>
  );
}

export default App;
