import React from 'react';
import './EasterEgg.css';
import { Link } from "react-router-dom";

export default function EasterEgg() {
    return (
        <div className="bodyegg">
       <Link to={'/Pendulum'}> <div className="egg"></div></Link>
        </div>
    )
}
