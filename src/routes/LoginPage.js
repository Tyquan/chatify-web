import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import CardSection from '../components/common/CardSection';
import Input from '../components/common/Input';
import {startLogin} from '../actions/auth';
import Nav from '../components/Nav';

class LoginPage extends React.Component {
	state = {
		email: '',
		password: '',
		phoneNumber: '',
		error: ''
	}

	onButtonPress(){
		const {phoneNumber} = this.state;
		this.setState({
			error: '',
			phoneNumber: phoneNumber
		});
		// firebase.auth().signInWithEmailAndPassword(email, password).catch(() => {
		// 	firebase.auth().createUserWithEmailAndPassword(email, password).catch(() => {
		// 		this.setState({
		// 			error: 'Authentication Failed'
		// 		});
		// 	});
		// });
	}

	render(){
		return (
			<div>
				<Nav />
				<br />
				<div className="container">
					<h1 className="text-center">Login</h1>
		    		<hr />
					<label>Phone Number:</label>
					<br />					
					<input
						type="text"
						className="form-control"
						value={this.state.phoneNumber}
						placeholder="(917)2621837"
						onChangeText={phoneNumber => this.setState({ phoneNumber })}
					/>

					<p>
						{this.state.error}
					</p>
					<br />
					<Link to="/user/contacts">
						<button
							className="btn btn-primary"
							onClick={this.onButtonPress.bind(this)}>
							Log In
						</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default LoginPage;