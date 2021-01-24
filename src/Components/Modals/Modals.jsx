import React from 'react';
import './Modals.css';

export default function Modals() {
    return (
        <div className="modal-align">
            <div className="container">

                <img className="modal-img" src="images/portfolio/love.jpg" alt="love" width="400rem" />
                <h2>ILOVEHACK</h2> <span className="categories"><i className="fa fa-tag" />App</span>
                <p>With React,Express,NodeJS,MongoDB</p>
                <div className="buttons">
                    <a className="button" href="#be-nice">See More</a>
                </div>
            </div>



            <div className="modal" id="be-nice">
                <div className="modal-content">
                    <img className="pop-img"  src="images/portfolio/heart.jpg" alt="pixel" />
                    <h4>ILOVEHACK</h4>
                    <p><u>I LOVE HACK</u> is an app that allows you to find love leaving behind your physical appearance and looking for your best partner through a test.</p>
                    <i className="align-btn-portfolio">
                        <a href="#close" className="button">Close</a>
                        <a href="https://i-love-hack.herokuapp.com/" className="button">Go to App</a>
                    </i>
                </div>
                <a href="#close" className="background">.</a>
            </div>


            <div className="container">
                <img className="modal-img" src="images/portfolio/palomitas.jpg" alt="palomitas" width="400rem" />
                <h2>MovieDick</h2><span className="categories"><i className="fa fa-tag" />App</span>
                <p>With React,Express,NodeJS,MongoDB</p>
                <div className="buttons">
                    <a className="button" href="#be-nice1">See More</a>
                </div>
            </div>



            <div className="modal" id="be-nice1">
                <div className="modal-content">
                    <img className="pop-img" src="images/portfolio/cine.jpg" alt="cine" />
                    <h4>MovieDick</h4>
                    <p><u>MovieDick</u> is a movie social network, where you can search, add or share any movie.
The app that every movie lover needs.</p>
<div className="align-btn-portfolio">
                    <a href="#close" className="button">Close </a>
                    <a href="https://moviedick.herokuapp.com" className="button">Go to App</a>
                </div>
                </div>
                <a href="#close" className="background">.</a>
            </div>


            <div className="container">
                <img className="modal-img" src="images/portfolio/ironman.jpg" height="400px" alt="hero" width="400rem" />
                <h2>I´m Your Hero</h2><span className="categories"><i className="fa fa-tag" />Web</span>
                <p>With HTML,CSS,JScript</p>
                <div className="buttons">
                    <a className="button" href="#be-nice2">See More</a>
                </div>
            </div>



            <div className="modal" id="be-nice2">
                <div className="modal-content">
                    <img className="pop-img"  src="images/portfolio/ironman.webp" alt="ironman" />
                    <h4>I´M YOUR HERO</h4>
                    <p><u>I´M YOUR HERO</u> is a website to enjoy marvel heroes and get to know them more thoroughly, with a retro mode for comic lovers.</p>
                    <div className="align-btn-portfolio">
                    <a href="#close" className="button">Close</a>
                    <a href="https://chipiriguino.github.io/ProyectoMarvel/" className="button">Go to App</a>
                </div>
                </div>
                <a href="#close" className="background">.</a>
            </div>

            {/* <div className="container">
<img src="images/portfolio/loading.png" alt="loading" />
<h5>In comming...</h5>
                        <p>Loading</p>
    <div className="buttons">
        <a className="button" href="#be-nice3">See More</a>
    </div>
</div>



<div className="modal" id="be-nice3">
    <div className="modal-content">
    <img className="scale-with-grid" src="images/portfolio/loading.png" alt="charging" />
    <h4>Loading 56%</h4>
              <p>In comming</p>
                <a href="#close" className="button">Close</a>
        <a  href="" className="button">Soon</a>
    </div>
    <a href="#close" className="background">.</a>
</div> */}

        </div>
    )
}
