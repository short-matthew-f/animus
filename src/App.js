import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spinning: false,
      pulsing: false,
      disco: false,
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  statefulClassName() {
    let className = "stateful";
    className += this.state.spinning ? " spinning" : "";
    className += this.state.pulsing ? " pulsing" : "";
    className += this.state.disco ? " disco" : "";

    return className;
  }

  handleButtonClick(evt) {
    const { name } = evt.target;

    const nextState = ['spinning', 'pulsing', 'disco'].reduce((nextState, keyName) => {
      nextState[keyName] = keyName === name;
      return nextState;
    }, {})

    this.setState(nextState, () => console.log(this.state));
  }

  render() {
    return (
      <div className="App">
        <div className="interface-container">
          <button
            name="spinning"
            onClick={ this.handleButtonClick }>SPIN!</button>
          <button
            name="pulsing"
            onClick={ this.handleButtonClick }>PULSE!</button>
          <button 
            name="disco"
            onClick={ this.handleButtonClick }>DISCO!</button>
        </div>
        <div className="stateful-container">
          <div className={ this.statefulClassName() }></div>
        </div>
      </div>
    );
  }
}

export default App;
