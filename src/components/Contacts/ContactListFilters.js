import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setNameFilter, sortByName } from '../../actions/contactFilters';

const ContactListFilters = (props) => (
	<div>
		<input 
			type="text"
			placeholder="Search for a name"
			className="form-control" 
			value={props.contactFilters.name}
			onChange={(e) => {
				props.dispatch(setNameFilter(e.target.value));
				console.log(props);
			}} 
		/>
		<Link 
			to='/user/addContacts'
		>
			Add New Contact
		</Link>
	</div>
);

const mapStateToProps = (state) => {
	console.log(state);
	return {
		contactFilters: state.contactFilters
	};
}

export default connect(mapStateToProps)(ContactListFilters);