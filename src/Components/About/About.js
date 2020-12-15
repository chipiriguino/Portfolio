import React, { Component } from 'react';


export default class About extends Component {
  render() {
    return (      
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/yipi.jpeg" alt="profile" />
          </div>
          <div className="nine columns main-col">
            <h2>About me</h2>
            <p>I'm an art-loving Front-End developer, and the best way to express art these days than through technologies.
My previous jobs (cameraman, deliveryman, restocker, commercial ...) have helped me to mature as a person.<br></br> In a self-taught way I began to be interested in the world of programming, and that love emerged between us, which have led me to take the decision to dedicate myself to web development, since it allows me to capture what I think and feel about an HTML document.
All of these roles taught me how to adapt, problem solve, organize and work hard for my future in web development.<br></br>
Knowledge of: ES6, CSS3, HTML5, Bootstrap, JavaScript, MongoDB, web responsive, DOM, Object Oriented Programming, NodeJS, ExpressJS, Handlebars, Mongoose, ReactJS. </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact</h2>
                <p className="address">
                  <span>Jose Luis Blasco Ortiz</span><br />
                  <span> Vila de Gràcia<br />
                    Barcelona 08025 ES
                  </span><br />
                  <span>(0034) 663537159</span><br />
                  <span>joseluisblascoortiz@hotmail.com</span>
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

