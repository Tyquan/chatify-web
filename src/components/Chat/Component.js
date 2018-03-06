import React, {Component} from 'react';
import io from 'socket.io-client';

class Chat extends Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			message: '',
			messages: []
		};
		this.socket = io('localhost:3000');

		this.socket.on('RECEIVE_MESSAGE', (data) => {
			addMessage(data);
		});

		const addMessage = data => {
			this.setState({
				username: data.author,
				message: data.message,
				messages: [...this.state.messages, data]
			});
			console.log("State:", this.state);
		};
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormSubmit(e){
		e.preventDefault();
		const socket = io('localhost:3000');
		socket.emit('SEND_MESSAGE', {
			author: e.target.elements.username.value,
			message: e.target.elements.message.value
		});

		e.target.elements.username.value = '';
		e.target.elements.message.value = '';
	}

	render(){
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col">
						<div className="card-body">
							<div className="card-title">
								Chat
							</div>
							<hr />
							<div className="messages">
								{this.state.messages.map(message => {
									return (
										<div key={message}>
											<p><b>{message.author}</b>: {message.message}    
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
								<input className="form-control" name="username" type="text" placeholder="Username"  />
								<br />
								<input className="form-control" name="message" type="text" placeholder="Type Message Here"  />
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