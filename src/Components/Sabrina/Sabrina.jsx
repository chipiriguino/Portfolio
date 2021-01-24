import React from 'react'
import './Sabrina.css';
import Window from "../Window/Window"


export default function Sabrina() {
    return (
        <div className="sabrina-body">
          <a href="/portfolio"><div className="folder">
                <div className="front"></div>
                <div className="back"></div>
            </div>
           </a>
           <img  src="images/martillo-08.gif" alt="profile" />

           ​<div className="ese">
  <h1 className="tsz">Jose Luis Blasco</h1>
</div>
<Window />
        </div>
    )
}
