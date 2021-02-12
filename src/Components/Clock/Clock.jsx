import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
  constructor(props) {
    super(props);
this.state = { date: new Date() };
  }
componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
componentWillUnmount() {
    clearInterval(this.timerID);
  }
tick() {
    this.setState({
      date: new Date()
    });
  }
render() {
    return (
      <div><p className="clock-txt"><i className="hidden-clock">Current local time </i>{this.state.date.toLocaleTimeString()}</p>
    </div>
      
    );
  }
}
export default Clock;