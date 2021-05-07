import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: false,
    };
  }
  change() {
    this.setState({ message: true });
  }

  render() {
    const isLoggedIn = this.state.message;
    return (
      <div id="main">
        <div>
          <button id="click" onClick={() => this.change()}>
            Click
          </button>
        </div>
        <div>
          {isLoggedIn ? (
            <p id="para">
              Hello, I've learnt to use the full-stack evaluation tool. This
              makes me so happy
            </p>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
