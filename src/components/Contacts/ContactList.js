import React from 'react';
import { connect } from 'react-redux';
import ContactListItem from './ContactListItem';

const ContactList = (props) => (
	<div>
		<h1>Contact List Now</h1>
		{props.contacts.map((contact) => {
			return <ContactListItem key={contact.id} {...contact} />
		})}
	</div>
);

const mapStateToProps = (state) => {
	return {
		contacts: state.contacts,
		contactFilters: state.contactFilters
	};
};

export default connect(mapStateToProps)(ContactList);