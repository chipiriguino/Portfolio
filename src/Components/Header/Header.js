import React, { Component } from 'react'
export default class Header extends Component {
  render() {
    return (
      <header id="home">
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Hi, I´m Jose Luis Blasco Ortiz</h1>
            <h3>I am a <span>Full Stack developer </span>from Barcelona. If you want to know more about me you can explore my website.</h3>
            <hr />
            <ul className="social">
              <li><a rel="noopener noreferrer" target="_blank" href="https://twitter.com/chipiriguino"><i className="fa fa-twitter" /></a></li>
              <li><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/joseluis-blascoortiz/"><i className="fa fa-linkedin" /></a></li>
              <li><a rel="noopener noreferrer" target="_blank" href="https://github.com/chipiriguino"><i className="fa fa-github" /></a></li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}