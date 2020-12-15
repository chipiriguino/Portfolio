import React, { Component } from 'react'

export default class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Here you can see some of my works</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img src="images/portfolio/love.jpg" alt="love" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>ILOVEHACK</h5>
                        <p>With React,Express,NodeJS,MongoDB</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img  src="images/portfolio/palomitas.jpg" alt="palomitas" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>MovieDick</h5>
                        <p>With React,Express,NodeJS,MongoDB</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img src="images/portfolio/ironman.jpg" height="400px" alt="hero" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>I´m Your Hero</h5>
                        <p>With HTML,CSS,JScript</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img src="images/portfolio/loading.png" alt="loading" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>In comming...</h5>
                        <p>Loading</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>
              {/* <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-08" title>
                    <img alt src="images/portfolio/retrocam.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Retrocam</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> */}
            </div> 
          </div> 



          
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/heart.jpg" alt="pixel" />
            <div className="description-box">
              <h4>ILOVEHACK</h4>
              <p>I LOVE HACK is an app that allows you to find love leaving behind your physical appearance and looking for your best partner through a test.</p>
              <span className="categories"><i className="fa fa-tag" />App</span>
            </div>
            <div className="link-box">
              <a href="https://i-love-hack.herokuapp.com/">Go to App</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/cine.jpg" alt="cine"/>
            <div className="description-box">
              <h4>MovieDick</h4>
              <p>MovieDick is a movie social network, where you can search, add or share any movie.</p>
              <span className="categories"><i className="fa fa-tag" />App</span>
            </div>
            <div className="link-box">
              <a href="https://moviedick.herokuapp.com">Go to App</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/ironman.webp" alt="ironman" />
            <div className="description-box">
              <h4>I´M YOUR HERO</h4>
              <p>I´M YOUR HERO is a website to enjoy marvel heroes and get to know them more thoroughly, with a retro mode for comic lovers.</p>
              <span className="categories"><i className="fa fa-tag" />Website</span>
            </div>
            <div className="link-box">
              <a href="https://chipiriguino.github.io/ProyectoMarvel/">Go to App</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/loading.png" alt="charging" />
            <div className="description-box">
              <h4>Loading 56%</h4>
              <p>In comming</p>
              <span className="categories"><i className="fa fa-tag" />...</span>
            </div>
            <div className="link-box">
              <a href="">Soon</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          
          {/* <div id="modal-08" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt />
            <div className="description-box">
              <h4>Retrocam</h4>
              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
              <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div> */}
        </div> 
      </section>
    )
  }
}