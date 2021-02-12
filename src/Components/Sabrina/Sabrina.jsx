import React from 'react'
import './Sabrina.css';
import Clock from "../Clock/Clock";
import Window from "../../Components/Window/Window";
import Window1 from "../../Components/Window1/Window1";


export default function Sabrina() {
    return (
        <div className="sabrina-body">
            <div className="media-clock">
            <p className="txt-sabrina"><i className="hidden">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó y archivos de texto. Lorem Ipsum ha sido el texto de  </i>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó y archivos de texto. Lorem Ipsum ha sido el texto de  </p>
            <div className="clock"><Clock/></div>
            </div>
          <a href="/FiloJs"><div className="folder">
                <div className="front"></div>
                <div className="back"></div>
                <i className="chip">---FiloJS---</i>
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
