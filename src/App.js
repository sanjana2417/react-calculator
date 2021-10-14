import React, { Component } from 'react';
import Screen from './components/Screen';
import ButtonContainer from './components/ButtonContainer';
import Calculate from './logic/Calculate';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      input:  '',
      calc: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  componentWillMount() {
    window.addEventListener("keypress", this.onKeyPress);
   
  }

  handleClick = (buttonName) => {
    this.setState(Calculate(this.state, buttonName));
    console.log(buttonName);
  }

  onKeyPress = (e) => {
    console.log(e.keyCode);
    let buttonName;
    if(e.keyCode === 13) {
      buttonName = "=";
    } else if(e.keyCode === 8) {
      buttonName = "DEL";
    } else if (e.keyCode === 55) {
      buttonName = "7";
    } else if (e.keyCode === 56) {
      buttonName = "8";
    } else if (e.keyCode === 57) {
      buttonName = "9";
    } else if (e.keyCode === 52) {
      buttonName = "4";
    } else if (e.keyCode === 53) {
      buttonName = "5";
    } else if (e.keyCode === 54) {
      buttonName = "6";
    } else if (e.keyCode === 49) {
      buttonName = "1";
    } else if (e.keyCode === 50) {
      buttonName = "2";
    } else if (e.keyCode === 51) {
      buttonName = "3";
    } else if (e.keyCode === 48) {
      buttonName = "0";
    } else if (e.keyCode === 46) {
      buttonName = ".";
    } else if (e.keyCode === 43) {
      buttonName = "+";
    } else if (e.keyCode === 45) {
      buttonName = "-";
    } else if (e.keyCode === 42) {
      buttonName = "*";
    } else if (e.keyCode === 47) {
      buttonName = "/";
    } else if (e.keyCode === 37) {
      buttonName = "%";
    }
    console.log(e.keyCode);
    this.setState(Calculate(this.state, buttonName));
  }



  render() {
    return (
      <div className="Calculator">
        <Screen input = {this.state.input} result={this.state.result} calc={this.state.calc}/>
        <ButtonContainer clickHandler = {this.handleClick}/>
      </div>
    );
  }
}

export default App;
