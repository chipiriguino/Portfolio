
import './Window.css';

// export default function Window() {
//     return (
//         <div className="body-window">
//             <div className="window">
// 	<div className="title-bar">
// 		<div className="title-bar-title">Schrödinger</div>
// 		<div className="title-bar-close"></div>
// 		<div className="title-bar-max"></div>
// 		<div className="title-bar-min"></div>
// 	</div>
// 	<div className="content"> </div>
// 	<div className="resize-n"></div>
// 	<div className="resize-e"></div>
// 	<div className="resize-s"></div>
// 	<div className="resize-w"></div>
	
// 	<div className="resize-ne"></div>
// 	<div className="resize-nw"></div>
// 	<div className="resize-se"></div>
// 	<div className="resize-sw"></div>
// </div>

//         </div>
//     )
// }

import React, { Component } from 'react'

export default class Window extends Component {
	constructor(props) {
		super(props);
		this.state = {isToggleOn: true};
	
		// Este enlace es necesario para hacer que `this` funcione en el callback
		this.handleClick = this.handleClick.bind(this);
	  }
	
	  handleClick() {
		this.setState(state => ({
		  isToggleOn: !state.isToggleOn
		}));
	  }


	render() {
		return (
			<div className="body-window">
            <div className="window">
	<div className="title-bar">
		<div className="title-bar-title">Schrödinger</div>
		<a href="#close"><div onClick={this.handleClick} className="title-bar-close"></div></a>
		<div className="title-bar-max"></div>
		<div className="title-bar-min"></div>
	</div>
	<div className="content"> </div>
	<div className="resize-n"></div>
	<div className="resize-e"></div>
	<div className="resize-s"></div>
	<div className="resize-w"></div>
	
	<div className="resize-ne"></div>
	<div className="resize-nw"></div>
	<div className="resize-se"></div>
	<div className="resize-sw"></div>
</div>

        </div>
		)
	}
}



