import React from 'react';
import moment from 'moment';

export default class ContactForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: props.contact ? props.contact.name : '' ,
			countryCode: props.contact ? props.contact.countryCode : '' ,
			areaCode: props.contact ? props.contact.areaCode : '' ,
			phoneNumber: props.contact ? props.contact.phoneNumber : '' ,
			groups: [],
			organization: props.contact ? props.contact.organization : '' ,
			street: props.contact ? props.contact.street : '' ,
			city: props.contact ? props.contact.city : '' ,
			state: props.contact ? props.contact.state : '' ,
			zipcode:props.contact ? props.contact.zipcode : '' ,
			country: props.contact ? props.contact.country : '' ,
			webAddress: props.contact ? props.contact.webAddress : '' ,
			event: props.contact ? props.contact.event : '' ,
			note: props.contact ? props.contact.note : '' ,
			imAccount: props.contact ? props.contact.imAccount : '' ,
			nickname: props.contact ? props.contact.nickname : '' ,
			relationship: props.contact ? props.contact.relationship : '' ,
			createdAt: moment(),
			error: ''
		};
	}
	onNameChange = (e) => {
		const name = e.target.value;
		this.setState(() => ({ name }));
	}
	onCountryCodeChange = (e) => {
		const countryCode = e.target.value;
		this.setState(() => ({ countryCode }));
	}
	onAreaCodeChange = (e) => {
		const areaCode = e.target.value;
		this.setState(() => ({ areaCode }));
	}
	onPhoneNumberChange = (e) => {
		const phoneNumber = e.target.value;
		this.setState(() => ({ phoneNumber }));
	}
	onOrganizationChange = (e) => {
		const organization = e.target.value;
		this.setState(() => ({ organization }));
	}
	onStreetChange = (e) => {
		const street = e.target.value;
		this.setState(() => ({ street }));
	}
	onCityChange = (e) => {
		const city = e.target.value;
		this.setState(() => ({ city }));
	}
	onStateChange = (e) => {
		const state = e.target.value;
		this.setState(() => ({ state }));
	}
	onZipcodeChange = (e) => {
		const zipcode = e.target.value;
		this.setState(() => ({ zipcode }));
	}
	onCountryChange = (e) => {
		const country = e.target.value;
		this.setState(() => ({ country }));
	}
	onWebAddressChange = (e) => {
		const webAddress = e.target.value;
		this.setState(() => ({ webAddress }));
	}
	onEventChange = (e) => {
		const event = e.target.value;
		this.setState(() => ({ event }));
	}
	onNoteChange = (e) => {
		const note = e.target.value;
		this.setState(() => ({ note }));
	}
	onNicknameChange = (e) => {
		const nickname = e.target.value;
		this.setState(() => ({ nickname }));
	}
	onRelationshipChange = (e) => {
		const relationship = e.target.value;
		this.setState(() => ({ relationship }));
	}
	onSubmit = (e) => {
		e.preventDefault();
		if (!this.state.name) {
			this.setState(() => ({ error: 'Please Provide A Name'}));
		} else {
			this.setState(() => ({ error: '' }));
			this.props.onSubmit({
				name: this.state.name,
				countryCode: this.state.countryCode,
				areaCode: this.state.areaCode,
				phoneNumber: this.state.phoneNumber,
				organization: this.state.organization,
				street: this.state.street,
				city: this.state.city,
				state: this.state.state,
				zipcode:this.state.zipcode,
				country: this.state.country,
				webAddress: this.state.webAddress,
				event: this.state.event,
				note: this.state.note,
				imAccount: this.state.imAccount,
				nickname: this.state.nickname,
				relationship: this.state.relationship,
				createdAt: this.state.createdAt.valueOf(),
			});
			console.log('Submitted');
		}
	}

	render(){
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.onSubmit}>
					<input 
			        	type="text" 
			        	className="form-control"
			        	placeholder="Full Name"
			        	autoFocus
			        	value={this.state.name}
			        	onChange={this.onNameChange}
			        />
			        <br />
			        <input 
			        	type="number" 
			        	placeholder="Country Code"
			        	value={this.state.countryCode}
			        	onChange={this.onCountryCodeChange}
			        />
			        <br />
			        <input 
			        	type="number" 
			        	placeholder="Area Code"
			        	value={this.state.areaCode}
			        	onChange={this.onAreaCodeChange}
			        />
			        <br />
			        <input 
			        	type="number" 
			        	placeholder="Phone Number"
			        	value={this.state.phoneNumber}
			        	onChange={this.onPhoneNumberChange}
			        />
			        <br />
			        <br />
			        <input 
			        	type="text" 
			        	className="form-control"
			        	placeholder="Organization"
			        	value={this.state.organization}
			        	onChange={this.onOrganizationChange}
			        />
			        <br />
			        <br />
			        <h4>Address</h4>
			        <input 
			        	type="text" 
			        	className="form-control"
			        	placeholder="Street"
			        	value={this.state.street}
			        	onChange={this.onStreetChange}
			        />
			        <br />
			        <input 
			        	type="text" 
			        	className="form-control"
			        	placeholder="City"
			        	value={this.state.city}
			        	onChange={this.onCityChange}
			        />
			        <br />
			        <input 
			        	type="text" 
			        	className="form-control"
			        	placeholder="State"
			        	value={this.state.state}
			        	onChange={this.onStateChange}
			        />
			        <br />
			        <input 
			        	type="number"
			        	placeholder="Zipcode"
			        	value={this.state.zipcode}
			        	onChange={this.onZipcodeChange}
			        />
			        <br />
			        <br />
			        <input 
			        	type="text" 
			        	className="form-control"
			        	placeholder="Country"
			        	value={this.state.country}
			        	onChange={this.onCountryChange}
			        />
			        <br />
			        <br />
			        <input 
			        	type="text" 
			        	className="form-control"
			        	placeholder="Web Address"
			        	value={this.state.webAddress}
			        	onChange={this.onWebAddressChange}
			        />
			        <br />
			        <input 
			        	type="text" 
			        	className="form-control"
			        	placeholder="Event"
			        	value={this.state.event}
			        	onChange={this.onEventChange}
			        />
			        <br />
			        <input 
			        	type="text" 
			        	className="form-control"
			        	placeholder="Note"
			        	value={this.state.note}
			        	onChange={this.onNoteChange}
			        />
			        <br />
			        <input 
			        	type="text" 
			        	className="form-control"
			        	placeholder="IM Account"
			        	value={this.state.imAccount}
			        	onChange={this.onImAccountChange}
			        />
			        <br />
			        <input 
			        	type="text"
			        	className="form-control" 
			        	placeholder="Nickname"
			        	value={this.state.nickname}
			        	onChange={this.onNicknameChange}
			        />
			        <br />
			        <input 
			        	type="text"
			        	className="form-control"
			        	placeholder="Relationship (Friend)"
			        	value={this.state.relationship}
			        	onChange={this.onRelationshipChange}
			        />
			        <br />
			        <br />
			        <button
			        	className="btn btn-success"
			        >Save Contact</button>
				</form>
			</div>
		);
	}
}