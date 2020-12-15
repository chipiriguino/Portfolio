import React, { Component } from 'react'

export default class Resume extends Component {
  render() {
    return (
      <section id="resume">
      <div className="row work">
        <div className="three columns header-col">
          <h1><span>Work</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>IRONHACK</h3>
              <p className="info"> Full-stack developer<span>•</span> <em className="date">Sept 2020 – Dec 2020</em></p>
              <p>
              During three intense months of bootcamp I developed different projects and strengthened knowledge of different technologies: <b>HTML5, CSS, React, JavaScript, Bootstrap, NodeJS, Express and MongoDB.</b>
              </p>
            </div>
          </div> 
          <div className="row item">
            <div className="twelve columns">
              <h3>Mercadona</h3>
              <p className="info">Logistic <span>•</span> <em className="date">2018 - 2020</em></p>
              <p>
              Working in this company I learned a work methodology from a large company. To do an orderly work and thanks to him he brought me a maturity which led me to make the career change to Web developer.
              </p>
            </div>
          </div> 
          <div className="row item">
            <div className="twelve columns">
              <h3>Dolce Vitta</h3>
              <p className="info">Manager <span>•</span> <em className="date">2014 - 2018</em></p>
              <p>
              Local company in my city, where I took my first steps in the job market in a serious and continuous way. Where I learned to make decisions and assume responsibilities. To improve my way of speaking and behaving with clients due to the sector of the company.              </p>
            </div>
          </div> 
        </div> 
      </div> 
      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Studies</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>IRONHACK</h3>
              <p className="info">Bootcamp Web Developer<span></span> <em className="date"></em></p>
              <p>
              As I said previously, it was 12 weeks which put me to the test in terms of my abilities to understand, assimilate and apply all the necessary knowledge to have the training that I have today.

              </p>
            </div>
          </div> 
          <div className="row item">
            <div className="twelve columns">
              <h3>Degree in law</h3>
              <p className="info">UMH University <span>•</span> <em className="date">septiembre 2013 – junio 2018</em></p>
              <p>
              University stage of my life where I develop both mentally and personally, which I hold with great affection inside me.
              </p>
            </div>
          </div> 
          <div className="row item">
            <div className="twelve columns">
              <h3><a href="https://www.cambridgeenglish.org/">English B1</a></h3>
              <p className="info">Cambridge <span>•</span> <em className="date">2018</em></p>
              <p>
              Course to improve and deepen my knowledge of the English language.             </p>
            </div>
          </div> 
        </div> 
      </div> 

      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>
         
            <ul className="skills">
              <li><span className="bar-expand reactjs" /><em>ReactJS</em></li>
              <li><span className="bar-expand redux" /><em>HTML5</em></li>
              <li><span className="bar-expand postcss" /><em>CSS</em></li>
              <li><span className="bar-expand webpack" /><em>Bootstrap</em></li>
              <li><span className="bar-expand javascript" /><em>JavaScript</em></li>
              <li><span className="bar-expand typescript" /><em>Espress</em></li>
              <li><span className="bar-expand nodejs" /><em>NodeJS</em></li>
              <li><span className="bar-expand php" /><em>MongoDB</em></li>
            </ul>
        </div>
    </section>
    )
  }
}
