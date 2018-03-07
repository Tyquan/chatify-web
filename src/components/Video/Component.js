import React, {Component} from 'react';
import io from 'socket.io-client';

// $(function () {
//   'use strict';
//   $('#connect-btn').click(function () {
//     initChat($('#container')[0],
//       $('#username-input').val());
//   });

//   function initChat(container, username) {
//     var proxy = new ChatProxy();
//     React.renderComponent(<ChatBox chatProxy={proxy}
//       username={username}></ChatBox>, container);
//   }

//   window.onbeforeunload = function () {
//     return 'Are you sure you want to leave this page?';
//   };

// });

class VideoComponent extends Component {
	initChat(container, username){
		var proxy = new ChatProxy();
	    React.renderComponent(<ChatBox chatProxy={proxy}
	      username={username}></ChatBox>, container);
	}
	onButtonClick(){
		let container = document.getElementById('container');
		let userInput = document.getElementById('username-input');
		initChat(container[0], userInput.val());
	}
	render(){
		return (
			<section id="container">
			  <div className="reg-form-container">
			    <label for="username-input">Username</label>
			    <input type="text" id="username-input" className="form-control" />
			    <br />
			    <button onClick={onButtonClick} id="connect-btn" className="btn btn-primary">Connect</button>
			  </div>
			</section>
		);
	}
}

export default VideoComponent;