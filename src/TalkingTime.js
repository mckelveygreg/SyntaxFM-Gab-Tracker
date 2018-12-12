import React, { Component } from "react";
import Parser from "rss-parser";

const rssURL = "https://feed.syntax.fm/rss";
class TalkingTime extends Component {
  state = {
    totalTime: 0,
    sec: 0,
    min: 0,
    hour: 0,
    day: 0
  };

  componentDidMount() {
    let parser = new Parser();
    parser.parseURL(rssURL, (err, feed) => {
      console.log(feed);
      const missingEpidodes = ["02:33", "50:26"]
      let time = feed.items
        .map(item => item.itunes.duration) // make array of durations
        .filter(d => d) // filter out undefined
        .concat(...missingEpidodes) // add missing episodes
        .map(d =>
          d.split(":") // make array of time values
            .map(d => parseInt(d)) // convert string to int
            .reverse() // reverse so reduce works properly
            .reduce((prev, curr, i) => prev + curr * Math.pow(60, i)) // convert everything to seconds
        )
        .reduce((a, b) => a + b); // SO MUCH TALKING!?!

        console.log(time)
      let secPerDay = 86400; // 60 * 60 * 24
      let days = Math.floor(time / 60 / 60 / 24);
      let hours = Math.floor((time % secPerDay) / 60 / 60); // totalTime - days
      let mins = Math.floor(((time % secPerDay) % (60 * 60)) / 60); // totalTime - days - hours
      let secs = Math.floor(((time % secPerDay) % (60 * 60)) % 60); // totalTime - days - hours - min

      this.setState({
        totalTime: time,
        day: days,
        hour: hours,
        min: mins,
        sec: secs
      });
    });
  }

  render() {
    return (
      <div>
        (Total Time) => {this.state.day} Days : {this.state.hour} Hours : {this.state.min} Mins : {this.state.sec} Secs
      </div>
    );
  }
}

export default TalkingTime;
