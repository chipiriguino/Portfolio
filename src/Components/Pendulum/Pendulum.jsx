import React from 'react'
import './Pendulum.css';
import { Link } from "react-router-dom";

export default function Pendulum() {
    return (
        <div>
            <div className="wrapper">

            <Link to={'/Card'}> <div className="loader">
                    <div className="striker"> <div className="string"></div>H</div>
                    <div className="middle"><div className="string"></div>I</div>
                    <div className="middle"><div className="string"></div>R</div>
                    <div className="middle"><div className="string"></div>E</div>
                    <div className="middle"><div className="string"></div><span role="img" aria-label="hipno">🌀</span></div>
                    <div className="middle"><div className="string"></div>M</div>
                    <div className="ender"><div className="string"></div>E</div>

                </div></Link>
            </div>
        </div>
    )
}
