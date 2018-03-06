import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const ContactListItem = ({ id, name }) => (
	<div>
		<Link to={`/user/contact/${id}`}>
			<h3>{name}</h3>
		</Link>
		<Link to={`/user/contact/edit/${id}`}>
			Edit Contact
		</Link>
		<hr />
	</div>
);

export default connect()(ContactListItem);