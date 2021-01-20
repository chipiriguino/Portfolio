
import React, { Component } from "react";
import {
  Route,
  NavLink
} from "react-router-dom";
import Header from "./Components/Header/Header"
import About from "./Components/About/About"
import Resume from "./Components/Resume/Resume"
import Portfolio from "./Components/Portfolio/Portfolio";
import EasterEgg from "./Components/EasterEgg/EasterEgg";
import Pendulum from "./Components/Pendulum/Pendulum";
import Card from "./Components/Card/Card";
import Modals from "./Components/Modals/Modals";


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({open: this.state.open ? false : true})
  }

  render() {
    return (
        <div>
          <nav id="nav-wrap">
            <a className="mobile-btn" onClick={this.clickHandler} title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className={`nav${this.state.open}`}>
              <li><NavLink onClick={this.clickHandler} exact to="/">Home</NavLink></li>
              <li><NavLink onClick={this.clickHandler} to="/about">About me</NavLink></li>
              <li><NavLink onClick={this.clickHandler} to="/resume">Curriculum</NavLink></li>
              <li><NavLink onClick={this.clickHandler} to="/portfolio">Portfolio</NavLink></li>
            </ul>
          </nav>
          <div className="content">
            <Route exact path="/" component={Header} />
            <Route exact path="/about" component={About} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/EasterEgg" component={EasterEgg} />
            <Route exact path="/Pendulum" component={Pendulum} />
            <Route exact path="/Card" component={Card} />
            <Route exact path="/Modals" component={Modals} />
          </div>
        </div>
    );
  }
}

export default Nav;
