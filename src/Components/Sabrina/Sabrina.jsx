import React from 'react'
import './Sabrina.css';
import Clock from "../Clock/Clock";
import Window from "../../Components/Window/Window";
import Window1 from "../../Components/Window1/Window1";


export default function Sabrina() {
    return (
        <div className="sabrina-body">
            <div className="media-clock">
            <p className="txt-sabrina"><i className="hidden">Un pensamiento no paradójico me resulta casi insoportable, un pensamiento cerrado en sí mismo, coherente, que no admite la paradoja (Fernando Savater)</i> La creatividad, imaginación e intuición más que la base del medio juego, son indispensables, así como el carácter firme; el triunfo llega solamente con la lucha (Gari Kaspárov).  Me he dado cuenta de que la esperanza casi nunca va ligada a la razón; está privada de sensatez, creo que nace del instinto (Vasili Grossman)</p>
            <div className="clock"><Clock/></div>
            </div>
            <a href="/portfolio"><div className="folder">
                <div className="front"></div>
                <div className="back"></div>
                <i className="chip">--MyProjects--</i>
            </div>
           </a>
          <a href="/Slides&GH"><div className="folder folder1">
                <div className="front"></div>
                <div className="back"></div>
                <i className="chip">--Slides&GH--</i>
            </div>
           </a>
           <div className="hidden">
           <Window/>
           <Window1/>
           </div>
           <img className="hammer" src="images/martillo-08.gif" alt="hammer" width="70" height="70" />
           ​<div className="ese">
  <h1 className="tsz">JL Blasco TM </h1>
</div>
        </div>
    )
}
// Prueba