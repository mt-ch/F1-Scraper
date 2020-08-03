import React from 'react';
import './css/App.scss';

//components
import NavBar from './components/nav/navBar';
import ScheduleCard from './components/scheduleCard/scheduleCard';
import StandingsCard from './components/standingsCard/standingsCard';
import ResultsCard from './components/resultsCards/resultsCard';

function App() {
  return (
    <div className="content">
      <header>
        <NavBar/>
      </header>
    <div className="main-container">
      <section id="schedule">
        <ScheduleCard/>
        {/* <StandingsCard/> */}
      </section>
      {/* <section id="standings">
        <StandingsCard/>
      </section> */}
      <section id="results">
        {/* <ResultsCard/>  */}
      </section>
    </div>
    </div>
  );
}

export default App;
