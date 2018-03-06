import React from 'react';
import { connect } from 'react-redux';
import UserNav from '../../../components/UserNav';
import { removeContact } from '../../../actions/contacts';

const ShowContactPage = (props) => {
	console.log(props);
	return (
		<div>
			<UserNav />
			<br />
			<h3>Contact</h3>
			<hr />
			<button 
				onClick={() => {
					props.dispatch(removeContact({
						id: props.contact.id 
					}));
					// redirect to the dashboard
					props.history.push('/user/contacts');
				}}
			>
				Delete Contact
			</button>
		</div>
	);
};

export default connect()(ShowContactPage);