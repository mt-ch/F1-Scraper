import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, withStyles } from "@material-ui/core";

import Standings from "./driverStandings";
import Constructor from './constructorStandings';
import Pagination from "./pagination";
import GetDriverStandings from "../../utils/getDriverStandings";
import GetConstructorStandings from "../../utils/getConstructorStandings";

const StyledButton = withStyles({
  root: {
    background: "#00000085",
    border: 0,
    color: "#f5f5f5",
    padding: "0 1em 0 1em",
    borderRadius: "2em",
    boxShadow: "0 3px 5px 2px rgba(6, 6, 6, .2)"
  },
  label: {
    textTransform: "capitalize",
    margin: 0,
    fontFamily: "Orbitron",
    fontSize: "0.8em"
  }
})(Button);

const StandingsCard_ = () => {
  const [standings, setDStandings] = useState([]);
  const [cStandings, setCStandings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [standingsPerPage, setStandingsPerPage] = useState(6);
  const [active, setActive] = useState(true);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    setLoading(true);
    GetDriverStandings()
      .then(data => setDStandings(data))
      .then(setLoading(false));
    GetConstructorStandings()
      .then(data => setCStandings(data))
      .then(setLoading(false));
  }, []);

  const indexOfLastStanding = currentPage * standingsPerPage;
  const indexOfFirstStanding = indexOfLastStanding - standingsPerPage;
  const currentDStandings = standings.slice(
    indexOfFirstStanding,
    indexOfLastStanding
  );
  const currentCStandings = cStandings.slice(
    indexOfFirstStanding,
    indexOfLastStanding
  );

  return (
    <div id="card">
      <section id="header">
        <h1 id="title">
          <strong>Standings</strong>
        </h1>
        <ButtonGroup id="button">
          <StyledButton size="small" onClick={() => setActive(true)}>
            Driver
          </StyledButton>
          <StyledButton size="small" onClick={() => setActive(false)}>
            Team
          </StyledButton>
        </ButtonGroup>
      </section>
      <Standings standings={currentDStandings} loading={loading} active={active} />
      <Constructor standings={cStandings} loading={loading} active={active} />
      <Pagination
            standingsPerPage={standingsPerPage}
            totalStandings={standings.length}
            paginate={paginate}
        />
    </div>
  );
};

export default StandingsCard_;
