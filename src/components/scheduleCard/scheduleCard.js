import React, { Component } from "react";
import { Paper, styled } from "@material-ui/core";
import ReactLoading from "react-loading";
import Carousel from "react-material-ui-carousel";
import Round from "./round";
import GetSchedule from "../../utils/getSchedule";
var nearest = require('nearest-date')

const MyPaper = styled(Paper)({
  background: "#6b6392",
  borderRadius: "1em",
  padding: '0 0em 0 1em',
});

function getNearestDate(data){
    console.log(data.date)
    var target = new Date()
    var index = nearest(data, target)
    console.log(data[index])
    return data[index]
}

export class scheduleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rSchedule: [],
      isLoading: false
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    GetSchedule().then(data =>
      this.setState({ rSchedule: data, isLoading: false })
    );
  }

  render() {
    const { rSchedule, isLoading } = this.state;
    if (isLoading) {
      return (
        <MyPaper id="card">
            <ReactLoading
              type={"spinningBubbles"}
              color={"white"}
              height={"20%"}
              width={"20%"}
            />
        </MyPaper>
      );
    } else
      return (
        <MyPaper id="card">
          <Carousel
            next={() => {
              /* Do stuff */
            }}
            prev={() => {
              /* Do other stuff */
            }}
            indicators={false}
            autoPlay={false}
            animation={'fade'}
            startAt={getNearestDate(rSchedule)}
          >
            {rSchedule.map(schedule => (
              <div key={schedule.date}>
                <Round schedule={schedule} />
              </div>
            ))}
          </Carousel>
        </MyPaper>
      );
  }
}

export default scheduleCard;
