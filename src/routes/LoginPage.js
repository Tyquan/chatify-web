import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import CardSection from '../components/common/CardSection';
import Input from '../components/common/Input';
import {startLogin} from '../actions/auth';
import Nav from '../components/nav';

class LoginPage extends React.Component {
	state = {
		email: '',
		password: '',
		phoneNumber: '',
		error: ''
	}

	onButtonPress(){
		const {email} = this.state;
		this.setState({
			error: ''
		});
		firebase.auth().signInWithEmailAndPassword(email, password).catch(() => {
			firebase.auth().createUserWithEmailAndPassword(email, password).catch(() => {
				this.setState({
					error: 'Authentication Failed'
				});
			});
		});
	}

	render(){
		return (
			<Card>
				<CardSection>
					<Input
						value={this.state.phoneNumber}
						placeholder="(917)2621837"
						label="Phone Number"
						onChangeText={phoneNumber => this.setState({ phoneNumber })}
					/>
				</CardSection>

				<p>
					{this.state.error}
				</p>

				<CardSection>
					<Link to="/user/contacts">
						<Button onClick={this.onButtonPress.bind(this)}>
							Log In
						</Button>
					</Link>
				</CardSection>
			</Card>
		);
	}
}

export default LoginPage;