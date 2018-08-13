import React from 'react';
import moment from 'moment';

export default class GroupForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: props.group ? props.group.name : '' ,
			description: props.group ? props.group.description : '' ,
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
	
	onSubmit = (e) => {
		e.preventDefault();
		if (!this.state.name) {
			this.setState(() => ({ error: 'Please Provide A Name'}));
		} else {
			this.setState(() => ({ error: '' }));
			this.props.onSubmit({
				name: this.state.name,
				description: this.state.description,
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
			        <textarea
			        	type="text" 
			        	className="form-control"
			        	placeholder="description"
			        	value={this.state.description}
			        	onChange={this.onDescriptionChange}
			        ></textarea>
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