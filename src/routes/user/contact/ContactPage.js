import React from 'react';
import UserNav from '../../../components/UserNav';
import ContactList from '../../../components/Contacts/ContactList';
import ContactListFilters from '../../../components/Contacts/ContactListFilters';
import UserFooter from '../../../components/UserFooter';

export default () => (
	<div>
		<UserNav />
		<br />
		<h1 className="text-center">Your Contacts</h1>
		<hr />
		<ContactListFilters />
		<ContactList />
		<UserFooter />
	</div>
);