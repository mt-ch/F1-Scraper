import React, { Component } from "react";
import { Paper, styled } from "@material-ui/core";
import ReactLoading from "react-loading";
import Carousel from "react-material-ui-carousel";
import Round from "./round";
import GetSchedule from "../../utils/getSchedule";
import closestIndexTo from 'date-fns/closestIndexTo';

const MyPaper = styled(Paper)({
  background: "#6b6392",
  borderRadius: "1em",
});

function getDate(data){
  var dateToCompare = new Date()
  var dates = [];
  for(const { date: d } of data){
    dates.push(new Date(d))
  }
  console.log(dates)
   var result = closestIndexTo(dateToCompare, dates)
   console.log(result)
  return result
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
        <div id="card">
          <Carousel
            next={() => {
            }}
            prev={() => {
            }}
            indicators={false}
            autoPlay={false}
            animation={'fade'}
            startAt={getDate(rSchedule)}
          >
            {rSchedule.map(schedule => (
              <div key={schedule.date}>
                <Round schedule={schedule} />
              </div>
            ))}
          </Carousel>
        </div>
      );
  }
}

export default scheduleCard;
