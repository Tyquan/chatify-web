import React from 'react';
import moment from 'moment';

export default class GroupForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: props.group ? props.group.name : '' ,
			description: props.group ? props.group.description : '' ,
			memberOne: props.group ? props.group.memberOne : '' ,
			memberTwo: props.group ? props.group.memberTwo : '' ,
			memberThree: props.group ? props.group.memberThree : '' ,
			createdAt: moment(),
			error: ''
		};
	}
	onNameChange = (e) => {
		const name = e.target.value;
		this.setState(() => ({ name }));
	}
	onDescriptionChange = (e) => {
		const description = e.target.value;
		this.setState(() => ({ description }));
	}
	onMemberOneChange = (e) => {
		const memberOne = e.target.value;
		this.setState(() => ({ memberOne }));
	}
	onMemberTwoChange = (e) => {
		const memberTwo = e.target.value;
		this.setState(() => ({ memberTwo }));
	}
	onMemberThreeChange = (e) => {
		const memberThree = e.target.value;
		this.setState(() => ({ memberThree }));
	}
	
	onSubmit = (e) => {
		e.preventDefault();
		if (!this.state.name) {
			this.setState(() => ({ error: 'Please Provide A Name'}));
		} else {
			this.setState(() => ({ error: '' }));
			this.props.onSubmit({
				name: this.state.name,
				description: this.state.description,
				members: this.state.members,
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
			        	placeholder="Group Name"
			        	autoFocus
			        	value={this.state.name}
			        	onChange={this.onNameChange}
			        />
			        <br />
			        <input 
			        	type="text" 
			        	className="form-control"
			        	placeholder="description"
			        	value={this.state.description}
			        	onChange={this.onDescriptionChange}
			        />
			        <br />
			        <input 
			        	type="text" 
			        	placeholder="Member 1"
			        	value={this.state.memberOne}
			        	onChange={this.onMemberOneChange}
			        />
			        <br />
			        <input 
			        	type="text" 
			        	placeholder="Member 2"
			        	value={this.state.memberTwo}
			        	onChange={this.onMemberTwoChange}
			        />
			        <br />
			        <input 
			        	type="text" 
			        	placeholder="Member 3"
			        	value={this.state.memberThree}
			        	onChange={this.onMemberThreeChange}
			        />
			        <br />
			        <br />
			        <button
			        	className="btn btn-success"
			        >Save Group</button>
				</form>
			</div>
		);
	}
}