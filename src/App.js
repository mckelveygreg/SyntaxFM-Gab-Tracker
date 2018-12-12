import React, { Component } from 'react';
import './App.css';
import TalkingTime from './TalkingTime'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>How long have Wes and Scott been talking?!</h1>
        <p>Total time</p>
        <TalkingTime />
      </div>
    );
  }
}

export default App;
