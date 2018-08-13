import React, {Component} from 'react';
import io from 'socket.io-client';
// import socket from 'socket.io';
// const port = process.env.PORT;

// const sock = socket(port);

// var peerServer = new PeerServer({ port: 9000, path: '/videos' });

// peerServer.on('connection', function (id) {
//   io.emit(Videos.USER_CONNECTED, id);
//   console.log('User connected with #', id);
// });

// peerServer.on('disconnect', function (id) {
//   io.emit(Videos.USER_DISCONNECTED, id);
//   console.log('With #', id, 'user disconnected.');
// });

// sock.on('connection', (socket) => {
// 	console.log("Socket Id:", socket.id);

// 	socket.on('SEND_MESSAGE', (data) => {
// 		bcrypt.hash(data.message, 10, (err, hash) => {
// 			//data.message = hash;
// 			console.log("Sent Message:", data.message);
// 			console.log("Sent Hash:", hash);
// 			bcrypt.compare(data.message, hash, (err, res) => {
// 			  if(res) {
// 			   // Passwords match
// 			   console.log("Everythings a Go!");
// 			   sock.emit('RECEIVE_MESSAGE', data);
// 			  } else {
// 			   // Passwords don't match
// 			   console.log("ERROR!!");
// 			  } 
// 			});
			
// 		});
// 	});
// });

class Chat extends Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			message: '',
			messages: [],
			id: null
		};
		this.socket = io('localhost:3000');

		this.socket.on('RECEIVE_MESSAGE', (data) => {
			addMessage(data);
		});

		const addMessage = data => {
            console.log(data);
            this.setState({messages: [...this.state.messages, data]});
            console.log(this.state.messages);
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            })
            this.setState({author: '', message: ''});

        }
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}



	onFormSubmit(e){
		e.preventDefault();
		const socket = io('localhost:3000');
		socket.emit('SEND_MESSAGE', {
			// author: e.target.elements.username.value,
			author: "User_" + String(Math.floor(Math.random() * 10)),
			message: e.target.elements.message.value
		});

		e.target.elements.username.value = '';
		e.target.elements.message.value = '';
		e.target.elements.message.value = '';
	}

	render(){
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col">
						<div className="card-body">
							<div className="card-title">
								Messages
							</div>
							<hr />
							<div className="messages">
								{this.state.messages.map(message => {
									return (
										<div>
											<p><b>{message.author}</b>: {message.message}    
											<br />
											<small><i>
												{new Intl.DateTimeFormat('en-GB', {
													year: 'numeric', 
													month: 'long', 
													day: '2-digit' 
												}).format(message.date)}
											</i></small></p>
										</div>
									)
								})}
							</div>
							<br />
						</div>
						<div className="card-footer">
							<form onSubmit={this.onFormSubmit}>
								<input className="form-control" name="message" type="text" placeholder="Type Your Message Here"  />
								<br />
								<button className="btn btn-primary form-control">Send</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Chat;