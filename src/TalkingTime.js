import React, { Component } from 'react'
import Parser from 'rss-parser' 

const rssURL = 'https://feed.syntax.fm/rss'
class TalkingTime extends Component {
  state = {
    totalTime: 0,
    sec: 0,
    min: 0,
    hour: 0,
  }

  componentDidMount() {
    let parser = new Parser()
    parser.parseURL(rssURL, (err, feed) => {
      console.log(feed)
      let time = feed.items
        .map(item => item.itunes.duration)
        .filter(d => d)
        .map(d => d.split(':') 
                  .reverse()
                  .map(d => parseInt(d))
                  .reduce((prev, curr, i) => prev + curr * Math.pow(60, i)))
        .reduce((a, b) => a + b)
        
        
        
        
        this.setState({totalTime: time})


      console.log(time)
    })
  }


  render() {
    return (
      <div>
        {this.state.totalTime}
      </div>
    )
  }
}

export default TalkingTime;