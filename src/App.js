import React, { Component } from "react";
import "./App.css";
import TalkingTime from "./TalkingTime";
//import syntaxLogo from './static/syntax-log.png'
class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>SyntaxFM Gab Tracker</h1>
        <div className="time">
          <h2>How long have Wes and Scott been talking?!</h2>
          <TalkingTime />
          <code><a href='' >View Source Code</a></code>
        </div>
        <img
          src={require("./static/syntax-logo.png")}
          alt="syntax"
          className="logo"
        />
      </div>
    );
  }
}

export default App;
