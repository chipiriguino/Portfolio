import React from 'react';
import './Modals.css';

export default function Modals() {
    return (
        <div className="modal-align">
            <div className="container">

                <img className="modal-img" src="images/portfolio/love.jpg" alt="love" width="400rem" />
                <h2>ILOVEHACK</h2> <span className="categories"><i className="fa fa-tag" />App</span>
                <p>With React,Express,NodeJS,MongoDB,CSS</p>
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
                <p>With React,Express,NodeJS,MongoDB,CSS</p>
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
                <img className="modal-img" src="images/cuboplaya.jpg" height="400px" alt="hero" width="400rem" />
                <h2>ElCubo</h2><span className="categories"><i className="fa fa-tag" />E-commerce</span>
                <p>With React,Express,MongoDB,NodeJS,CSS</p>
                <div className="buttons">
                    <a className="button" href="#be-nice3">See More</a>
                </div>
            </div>



            <div className="modal" id="be-nice3">
                <div className="modal-content">
                    <img className="pop-img"  src="images/cubo-pip.png" alt="ironman" />
                    <h4>ElCubo</h4>
                    <p><u>ElCubo</u> is an ecommerce where you can both buy or sell and leave your comments.
In addition, 3 different accounts for management (sellers, clients and admin)</p>
                    <div className="align-btn-portfolio">
                    <a href="#close" className="button">Close</a>
                    <a href="https://elcubo.herokuapp.com/" className="button">Go to App</a>
                </div>
                </div>
                <a href="#close" className="background">.</a>
            </div>


        


        </div>
    )
}
