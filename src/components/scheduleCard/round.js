import React from "react";
import moment from "moment";
import Track from "./track";

export default function Round({ schedule }) {
  return (
    // iterate schedule info for each slide
    <div id="info">
      <div id="race-info">
         <h3>Round {schedule.round} | {moment(schedule.date).format("Do MMM")}{" "}</h3>
          <div id="country-info">
            <h1>{schedule.country}</h1>
            <img
                id="flag"
                src={require(`../../assets/scheduleFlags/${schedule.country}.png`)}
                alt={"Flag"}
            />
          </div>
          <h3>{schedule.name}</h3>
          <p>{schedule.circuit}</p>
      </div>
      {/* <Track country={schedule.localName} /> */}
    </div>
  );
}
