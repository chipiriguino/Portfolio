import React from 'react';
import './Card.css';
import { Link } from "react-router-dom";

export default function Card() {
    return (
        <div>

<div className="container2">
  <div className="card">
    
    <div className="front side">
      <h1 className="logo">Jose Luis Blasco Ortiz</h1>
    </div>
    
    <div className="back side">
      <h3 className="name">Jose Luis Blasco Ortiz</h3>
      <div>Front-end developer</div>      
      <div className="info1">
        <p className="text-card"> <span className="property">Email: </span>joseluisblascoortiz@hotmail.com</p>
        <p className="text-card"><span className="property">Twitter: </span>@Chipiriguino</p>
        <p className="text-card"><span className="property">Phone: </span>(0034) 663-537-159</p>
        <Link to={'/'}> <p className="text-card"><span className="property">Website: </span>This page</p></Link>
      </div>
    </div>
    
  </div>
</div>
        </div>
    )
}
