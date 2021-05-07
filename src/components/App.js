import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prop: "None",
    };
  }
  change() {
    console.log("hello");
    this.setState({
      prop: "block",
    });
  }
  render() {
    return (
      <div id="main">
        <button id="click" onClick={() => this.change()}>
          Click
        </button>
        <p id="para" style={{ display: this.state.prop }}>
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      </div>
    );
  }
}

export default App;
